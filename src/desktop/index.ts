/* Copyright (C) 2018-2021 The Manyverse Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import xs from 'xstream';
import {setupReusable} from '@cycle/run';
import {withState} from '@cycle/state';
import {makeReactNativeDriver} from '@cycle/react-native';
import {AppRegistry} from 'react-native';
import {asyncStorageDriver} from 'cycle-native-asyncstorage';
import {ssbDriver} from '../frontend/drivers/ssb';
// import {dialogDriver} from '../frontend/drivers/dialogs';
import {makeFSDriver} from '../frontend/drivers/fs';
import {makeEventBusDriver} from '../frontend/drivers/eventbus';
import {makeLocalizationDriver} from '../frontend/drivers/localization';
import {global} from '../frontend/screens/global';
import {thread} from '../frontend/screens/thread';

const engine = setupReusable({
  asyncstorage: asyncStorageDriver,
  ssb: ssbDriver,
  screen: makeReactNativeDriver('manyverse'),
  fs: makeFSDriver(),
  navigation: (x: any) =>
    ({
      backPress: () => xs.never() as any,
      globalDidDisappear: () => xs.never() as any,
    } as any),
  globalEventBus: makeEventBusDriver(),
  dialog: (x: any) => ({
    alert: () => xs.never() as any,
    showPicker: () => xs.never() as any,
  }),
  localization: makeLocalizationDriver(),
  keyboard: (x: any) => ({
    events: () => xs.never() as any,
  }),
});

engine.run(withState(global)(engine.sources));
engine.run(
  withState(thread)({
    ...engine.sources,
    props: xs
      .of({
        selfFeedId: '@Vz6v3xKpzViiTM/GAe+hKkACZSqrErQQZgv4iqQxEn8=.ed25519',
        lastSessionTimestamp: 0,
        rootMsgId: '%vdPBFaZbVnlWHxGdN0giPaHTh4BQgTmj8lb039N510g=.sha256',
      })
      .remember(),
  } as any),
);
AppRegistry.runApplication('manyverse', {
  rootTag: document.getElementById('app'),
});
