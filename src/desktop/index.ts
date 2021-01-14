/* Copyright (C) 2018-2021 The Manyverse Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// import {Component} from 'react';
// import {AppRegistry} from 'react-native';
// import {View, Text, Button} from '@cycle/react-native'

import {run} from '@cycle/run';
import {makeReactNativeDriver, View, Text, Button} from '@cycle/react-native';
import {AppRegistry} from 'react-native';

// import makeClient from './ssb/client';
// const pull = require('pull-stream');

function main(sources: any) {
  const inc = Symbol();
  const inc$ = sources.react.select(inc).events('press');

  const count$ = inc$.fold((count: number) => count + 1, 0);

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

// class App extends Component {
//   render() {
//     // return createElement(Text, {}, 'hello world?');
//     return View([Text('Hello dude'), Button('hello',{title:'asdf',onPress:()=>console.log('click')})]);
//   }
// }

// AppRegistry.registerComponent('manyverse', () => App);
// AppRegistry.runApplication('manyverse', {
//   rootTag: document.getElementById('app'),
// });

function myapp() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Frontend JS activated';

  // makeClient().then((ssb) => {
  //   pull(
  //     ssb.conn.peers(),
  //     pull.drain((peers: Array<any>) => {
  //       element.innerHTML =
  //         '<ul>' +
  //         peers
  //           .map((peer) => peer[1].name || peer[1].key || '?')
  //           .map((name) => `<li>${name}</li>`)
  //           .join('\n') +
  //         '</ul><div>potato</div>';
  //     }),
  //   );

  //   pull(
  //     ssb.threads.public({
  //       threadMaxSize: 3,
  //       allowlist: ['post', 'contact'],
  //       reverse: true,
  //       live: false,
  //     }),
  //     pull.take(3),
  //     pull.drain((thread: any) => {
  //       console.warn(thread);
  //     }),
  //   );

  //   ssb.conn.start();
  // });

  return element;
}

document.body.appendChild(myapp());
