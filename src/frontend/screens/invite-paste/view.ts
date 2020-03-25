/* Copyright (C) 2018-2019 The Manyverse Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {Stream} from 'xstream';
import {h} from '@cycle/react';
import {View, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import {styles} from './styles';
import {Palette} from '../../global-styles/palette';
import TopBar from '../../components/TopBar';
import Button from '../../components/Button';
import {State} from './model';

export default function view(state$: Stream<State>) {
  const behaviorProp = Platform.OS === 'ios' ? 'behavior' : 'IGNOREbehavior';

  return state$.map(state => {
    const acceptEnabled = state.content.length > 0;

    return h(View, {style: styles.container}, [
      h(TopBar, {sel: 'topbar'}, [
        h(Button, {
          sel: 'inviteAcceptButton',
          style: acceptEnabled
            ? styles.acceptButtonEnabled
            : styles.acceptButtonDisabled,
          text: 'Done',
          strong: acceptEnabled,
          accessible: true,
          accessibilityLabel: 'Accept Invite Button',
        }),
      ]),

      h(
        KeyboardAvoidingView,
        {style: styles.bodyContainer, enabled: true, [behaviorProp]: 'padding'},
        [
          h(TextInput, {
            style: styles.contentInput,
            sel: 'contentInput',
            nativeID: 'FocusViewOnResume',
            accessible: true,
            accessibilityLabel: 'Invite Text Input',
            autoFocus: true,
            multiline: true,
            returnKeyType: 'done',
            placeholder: 'Paste an invitation code',
            placeholderTextColor: Palette.textVeryWeak,
            selectionColor: Palette.backgroundTextSelection,
            underlineColorAndroid: Palette.backgroundTextWeak,
          }),
        ],
      ),
    ]);
  });
}
