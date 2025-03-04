/* Copyright (C) 2018-2021 The Manyverse Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import xs from 'xstream';
import {Platform} from 'react-native';
import {ReactSource} from '@cycle/react';
import {AsyncStorageSource} from 'cycle-native-asyncstorage';
import path = require('path');
import {FSSource} from '../../drivers/fs';

export default function intent(
  screenSource: ReactSource,
  fsSource: FSSource,
  storageSource: AsyncStorageSource,
) {
  const appPath = FSSource.DocumentDirectoryPath;
  const oldLogPath = path.join(appPath, '.ssb', 'flume', 'log.offset');
  const newLogPath = path.join(appPath, '.ssb', 'db2', 'log.bipf');

  const accountExists$ = xs
    .combine(fsSource.exists(oldLogPath), fsSource.exists(newLogPath))
    .map(([oldLogExists, newLogExists]) => {
      if (!oldLogExists && !newLogExists) return xs.of(false);
      const oldLogSize$ = oldLogExists
        ? fsSource.stat(oldLogPath).map((stat) => (stat.size as any) as number)
        : xs.of(0);
      const newLogSize$ = newLogExists
        ? fsSource.stat(newLogPath).map((stat) => (stat.size as any) as number)
        : xs.of(0);
      return xs
        .combine(oldLogSize$, newLogSize$)
        .map(
          ([oldLogSize, newLogSize]) => oldLogSize >= 10 || newLogSize >= 10,
        );
    })
    .flatten();

  const latestVisit$ = storageSource.getItem('latestVisit');

  return {
    createAccount$: screenSource.select('create-account').events('press'),

    restoreAccount$: screenSource.select('restore-account').events('press'),

    skipOrNot$: xs
      .combine(accountExists$, latestVisit$)
      .map(([accountExists, latestVisit]) => accountExists || !!latestVisit),

    scrollBy$: xs
      .merge(
        screenSource.select('overview-continue').events('press').mapTo(1),
        screenSource.select('offgrid-continue').events('press').mapTo(1),
        screenSource.select('connections-continue').events('press').mapTo(1),
        screenSource.select('moderation-continue').events('press').mapTo(1),
        screenSource
          .select('permanence-continue')
          .events('press')
          .mapTo(Platform.OS === 'ios' ? 2 : 1),
        screenSource.select('inconstruction-continue').events('press').mapTo(1),
      )
      .map((offset) => [offset, /* animated */ true] as [number, boolean]),

    pageChanged$: screenSource.select('swiper').events('indexChanged'),

    learnMoreSSB$: screenSource.select('learn-more-ssb').events('press'),

    learnMoreOffGrid$: screenSource
      .select('learn-more-off-grid')
      .events('press'),

    learnMoreConnections$: screenSource
      .select('learn-more-connections')
      .events('press'),

    learnMoreModeration$: screenSource
      .select('learn-more-moderation')
      .events('press'),

    learnMorePermanence$: screenSource
      .select('learn-more-permanence')
      .events('press'),
  };
}
