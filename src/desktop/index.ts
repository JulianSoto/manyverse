/* Copyright (C) 2018-2021 The Manyverse Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {run} from '@cycle/run';
import {makeReactNativeDriver, View, Text, Button} from '@cycle/react-native';
import {AppRegistry} from 'react-native';
import makeClient from './ssb/client';
const pull = require('pull-stream');

function main(sources: any) {
  const inc = Symbol();
  const inc$ = sources.react.select(inc).events('press');

  const count$ = inc$.fold((count: number) => count + 1, 0);

  makeClient().then((ssb) => {
    ssb.whoami((err: any, {id}: {id: string}) => {
      console.log('whoami', id);

      ssb.aboutSelf.get(id, (err2: any, x: any) => {
        if (err2) console.error(err2);
        else console.log('aboutSelf', 'get', x);
      }),
        pull(
          ssb.aboutSelf.stream(id),
          pull.drain((x: any) => console.log('aboutSelf', 'stream', x)),
        );
    });

    ssb.db2migrate.start();

    pull(
      ssb.threadsUtils.publicUpdates(),
      pull.drain((x: any) => console.log('publicUpdates', x)),
    );

    pull(
      ssb.threadsUtils.privateUpdates(),
      pull.drain((x: any) => console.log('privateUpdates', x)),
    );

    pull(
      ssb.threadsUtils.publicFeed({}),
      pull.take(3),
      pull.drain((thread: any) => {
        console.log(thread);
      }),
    );

    pull(
      ssb.threadsUtils.selfPublicRoots({live: true, old: false}),
      pull.drain((thread: any) => {
        console.log(thread);
      }),
    );

    pull(
      ssb.threadsUtils.privateFeed({}),
      pull.take(3),
      pull.drain((thread: any) => {
        console.log(thread);
      }),
    );
  });

  const vdom$ = count$.map((i: number) =>
    View([
      Text(`Counter: ${i}`),
      Button(inc, {
        title: 'Increment',
        onPress: () => {},
      }),
    ]),
  );

  return {
    react: vdom$,
  };
}

run(main, {
  react: makeReactNativeDriver('manyverse'),
});
AppRegistry.runApplication('manyverse', {
  rootTag: document.getElementById('app'),
});
