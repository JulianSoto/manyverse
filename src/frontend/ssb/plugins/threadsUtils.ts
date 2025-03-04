/* Copyright (C) 2020-2021 The Manyverse Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const pull = require('pull-stream');
const Ref = require('ssb-ref');
import xs, {Stream} from 'xstream';
import {Thread as ThreadData} from 'ssb-threads/types';
import {Msg, Content, FeedId} from 'ssb-typescript';
import {isMsg, isContactMsg} from 'ssb-typescript/utils';
import run = require('promisify-tuple');
import {
  AnyThread,
  MsgAndExtras,
  ThreadAndExtras,
  ThreadSummary,
  ThreadSummaryWithExtras,
  PrivateThreadAndExtras,
  Reactions,
} from '../types';
import {imageToImageUrl, voteExpressionToReaction} from '../utils/from-ssb';
import {Callback} from 'pull-stream';
import xsFromPullStream from 'xstream-from-pull-stream';
import {ClientAPI, AnyFunction} from 'react-native-ssb-client';
import manifest from '../manifest';

type SSB = ClientAPI<
  typeof manifest & {
    cachedAboutSelf: {
      get: AnyFunction;
      invalidate: AnyFunction;
    };
    deweird: {
      source: AnyFunction;
    };
  }
>;

function getRecipient(recp: string | Record<string, any>): string | undefined {
  if (typeof recp === 'object' && Ref.isFeed(recp.link)) {
    return recp.link;
  }
  if (typeof recp === 'string' && Ref.isFeed(recp)) {
    return recp;
  }
}

function mutateMsgWithLiveExtras(ssb: SSB, includeReactions: boolean = true) {
  return async (msg: Msg, cb: Callback<MsgAndExtras>) => {
    if (!isMsg(msg) || !msg.value) return cb(null, msg as any);

    // Fetch name and image
    const id = msg.value.author;
    const [, output] = await run<any>(ssb.cachedAboutSelf.get)(id);
    const name = output.name;
    const imageUrl = imageToImageUrl(output.image);

    // Get reactions stream
    const reactions: Stream<Reactions> = includeReactions
      ? xsFromPullStream(ssb.votes.voterStream(msg.key))
          .startWith([])
          .map((arr: Array<unknown>) =>
            arr
              .reverse() // recent ones first
              .map(([feedId, expression]) => {
                const reaction = voteExpressionToReaction(expression);
                return [feedId, reaction];
              }),
          )
      : xs.never();

    // Create msg object
    const m = msg as MsgAndExtras;
    m.value._$manyverse$metadata = m.value._$manyverse$metadata || {
      reactions,
      about: {name, imageUrl},
    };

    // Add name of the target contact, if any
    const content = msg.value.content;
    if (!content || content.type !== 'contact' || !content.contact) {
      return cb(null, m);
    }
    const dest: FeedId = content.contact;
    const [, destOutput] = await run<any>(ssb.cachedAboutSelf.get)(dest);
    m.value._$manyverse$metadata.contact = {name: destOutput.name};
    cb(null, m);
  };
}

function mutateThreadWithLiveExtras(ssb: SSB) {
  return async (thread: ThreadData, cb: Callback<ThreadAndExtras>) => {
    for (const msg of thread.messages) {
      await run(mutateMsgWithLiveExtras(ssb))(msg);
    }
    cb(null, thread as ThreadAndExtras);
  };
}

function mutateThreadSummaryWithLiveExtras(ssb: SSB) {
  return async (
    summary: ThreadSummary,
    cb: Callback<ThreadSummaryWithExtras>,
  ) => {
    await run(mutateMsgWithLiveExtras(ssb))(summary.root);
    cb(null, summary as ThreadSummaryWithExtras);
  };
}

function mutatePrivateThreadWithLiveExtras(ssb: SSB) {
  return async (thread: ThreadData, cb: Callback<PrivateThreadAndExtras>) => {
    for (const msg of thread.messages) {
      await run(mutateMsgWithLiveExtras(ssb, false))(msg);
    }
    const root: Msg<Content> | undefined = thread.messages[0];
    const pvthread: PrivateThreadAndExtras = thread as any;
    if (root && root?.value?.content?.recps) {
      pvthread.recps = [];
      for (const recp of root?.value?.content?.recps) {
        const id = getRecipient(recp);
        if (!id) continue;

        // Fetch name and image
        const [, output] = await run<any>(ssb.cachedAboutSelf.get)(id);
        const name = output.name;
        const imageUrl = imageToImageUrl(output.image);

        // Push
        pvthread.recps.push({id, name, imageUrl});
      }
    }
    cb(null, pvthread as PrivateThreadAndExtras);
  };
}

const ALLOW_POSTS = ['post'];
const ALLOW_POSTS_AND_CONTACTS = ['post', 'contact'];

const threadsUtils = {
  name: 'threadsUtils' as const,

  init: function init(ssb: SSB) {
    if (!ssb.settingsUtils?.read) {
      throw new Error(
        '"threadsUtils" is missing required plugin "settingsUtils"',
      );
    }
    if (!ssb.dbUtils?.rawLogReversed) {
      throw new Error('"threadsUtils" is missing required plugin "dbUtils"');
    }

    const privateAllowlist = ALLOW_POSTS;
    let publicAllowlist = ALLOW_POSTS_AND_CONTACTS;

    // TODO: this could be in a "global component" in cycle-native-navigation
    ssb.settingsUtils.read((err: any, settings?: {showFollows?: boolean}) => {
      if (err) console.error(err);
      else if (settings?.showFollows === false) {
        publicAllowlist = ALLOW_POSTS;
      }
    });

    return {
      updateShowFollows(showFollows: boolean) {
        publicAllowlist = showFollows ? ALLOW_POSTS_AND_CONTACTS : ALLOW_POSTS;
      },

      publicRawFeed() {
        return pull(
          ssb.deweird.source(['dbUtils', 'rawLogReversed']),
          pull.asyncMap(mutateMsgWithLiveExtras(ssb, false)),
        );
      },

      publicFeed(opts: any) {
        return pull(
          ssb.deweird.source(['threads', 'publicSummary'], {
            allowlist: publicAllowlist,
            ...opts,
          }),
          pull.filter((summary: ThreadSummary) => {
            if (isContactMsg(summary.root)) {
              // Only accept blocking or unblocking messages
              const content = summary.root?.value?.content;
              return (
                typeof content?.blocking === 'boolean' &&
                typeof content?.following !== 'boolean'
              );
            } else {
              return true;
            }
          }),
          pull.asyncMap(mutateThreadSummaryWithLiveExtras(ssb)),
        );
      },

      publicUpdates() {
        return ssb.threads.publicUpdates({allowlist: publicAllowlist});
      },

      privateFeed(opts: any) {
        return pull(
          ssb.deweird.source(['threads', 'private'], {
            threadMaxSize: 1,
            allowlist: privateAllowlist,
            ...opts,
          }),
          pull.asyncMap(mutatePrivateThreadWithLiveExtras(ssb)),
        );
      },

      privateUpdates() {
        return ssb.threads.privateUpdates({
          allowlist: privateAllowlist,
          includeSelf: true,
        });
      },

      selfPublicRoots(opts: any) {
        return pull(
          ssb.dbUtils.selfPublicRoots(opts),
          pull.map((root: Msg) => ({root, replyCount: 0} as ThreadSummary)),
          pull.asyncMap(mutateThreadSummaryWithLiveExtras(ssb)),
        );
      },

      selfReplies(opts: any) {
        return pull(
          ssb.dbUtils.selfPublicReplies(opts),
          pull.asyncMap(mutateMsgWithLiveExtras(ssb)),
        );
      },

      profileFeed(id: FeedId, opts: any) {
        return pull(
          ssb.deweird.source(['threads', 'profileSummary'], {
            id,
            reverse: true,
            live: false,
            threadMaxSize: 3,
            allowlist: publicAllowlist,
            ...opts,
          }),
          pull.asyncMap(mutateThreadSummaryWithLiveExtras(ssb)),
        );
      },

      threadUpdates(opts: {root: FeedId; private: boolean}) {
        return pull(
          ssb.threads.threadUpdates(opts),
          pull.asyncMap(mutateMsgWithLiveExtras(ssb)),
        );
      },

      rehydrateLiveExtras(msg: MsgAndExtras, cb: Callback<MsgAndExtras>) {
        if (!isMsg(msg) || !msg.value) {
          return cb(new Error('not a msg'));
        }
        if (!msg.value._$manyverse$metadata) {
          return cb(new Error('missing live extras metadata'));
        }
        msg.value._$manyverse$metadata.reactions = xsFromPullStream(
          ssb.votes.voterStream(msg.key),
        )
          .startWith([])
          .map((arr: Array<unknown>) =>
            arr
              .reverse() // recent ones first
              .map(([feedId, expression]) => {
                const reaction = voteExpressionToReaction(expression);
                return [feedId, reaction];
              }),
          );
        cb(null, msg);
      },

      thread(opts: {root: FeedId; private: boolean}, cb: Callback<AnyThread>) {
        pull(
          ssb.deweird.source(['threads', 'thread'], opts),
          pull.asyncMap((t: ThreadData, cb2: Callback<AnyThread>) => {
            if (opts.private) {
              mutatePrivateThreadWithLiveExtras(ssb)(t, cb2);
            } else {
              mutateThreadWithLiveExtras(ssb)(t, cb2);
            }
          }),
          pull.take(1),
          pull.drain(
            (thread: AnyThread) => cb(null, thread),
            (err: any) => (err ? cb(err) : void 0),
          ),
        );
      },
    };
  },
};

export default () => threadsUtils;
