// Please DO NOT edit this file directly. See tools/update-i18n-types.js
declare module 'i18n-js' {
  type Key =
    | 'call_to_action.ok'
    | 'call_to_action.add'
    | 'call_to_action.done'
    | 'call_to_action.cancel'
    | 'call_to_action.continue'
    | 'call_to_action.delete'
    | 'call_to_action.save'
    | 'call_to_action.yes'
    | 'call_to_action.no'
    | 'call_to_action.open_menu.accessibility_label'
    | 'call_to_action.go_back.accessibility_label'
    | 'call_to_action.close.accessibility_label'
    | 'call_to_action.close_dialog.accessibility_label'
    | 'date.relative.past.years'
    | 'date.relative.past.months'
    | 'date.relative.past.weeks'
    | 'date.relative.past.days'
    | 'date.relative.past.hours'
    | 'date.relative.past.minutes'
    | 'date.relative.past.now'
    | 'date.relative.future.years'
    | 'date.relative.future.months'
    | 'date.relative.future.weeks'
    | 'date.relative.future.days'
    | 'date.relative.future.hours'
    | 'date.relative.future.minutes'
    | 'date.relative.future.now'
    | 'welcome.learn_more'
    | 'welcome.overview.title'
    | 'welcome.overview.description'
    | 'welcome.off_the_grid.title'
    | 'welcome.off_the_grid.description.1_normal'
    | 'welcome.off_the_grid.description.2_bold'
    | 'welcome.off_the_grid.description.3_normal'
    | 'welcome.off_the_grid.description.4_bold'
    | 'welcome.off_the_grid.description.5_normal'
    | 'welcome.connections.title'
    | 'welcome.connections.description.ios.1_normal'
    | 'welcome.connections.description.ios.2_bold'
    | 'welcome.connections.description.ios.3_normal'
    | 'welcome.connections.description.ios.4_bold'
    | 'welcome.connections.description.ios.5_normal'
    | 'welcome.connections.description.ios.6_bold'
    | 'welcome.connections.description.ios.7_normal'
    | 'welcome.connections.description.ios.8_bold'
    | 'welcome.connections.description.ios.9_normal'
    | 'welcome.connections.description.default.1_normal'
    | 'welcome.connections.description.default.2_bold'
    | 'welcome.connections.description.default.3_normal'
    | 'welcome.connections.description.default.4_bold'
    | 'welcome.connections.description.default.5_normal'
    | 'welcome.connections.description.default.6_bold'
    | 'welcome.connections.description.default.7_normal'
    | 'welcome.connections.description.default.8_bold'
    | 'welcome.connections.description.default.9_normal'
    | 'welcome.connections.description.default.10_bold'
    | 'welcome.connections.description.default.11_normal'
    | 'welcome.moderation.title'
    | 'welcome.moderation.description.1_normal'
    | 'welcome.moderation.description.2_bold'
    | 'welcome.moderation.description.3_normal'
    | 'welcome.permanence.title'
    | 'welcome.permanence.description.1_normal'
    | 'welcome.permanence.description.2_bold'
    | 'welcome.permanence.description.3_normal'
    | 'welcome.in_construction.title'
    | 'welcome.in_construction.description.1_normal'
    | 'welcome.in_construction.description.2_bold'
    | 'welcome.in_construction.description.3_normal'
    | 'welcome.setup_account.title'
    | 'welcome.setup_account.description'
    | 'welcome.setup_account.call_to_action.create.label'
    | 'welcome.setup_account.call_to_action.create.accessibility_label'
    | 'welcome.setup_account.call_to_action.restore.label'
    | 'welcome.setup_account.call_to_action.restore.accessibility_label'
    | 'central.app_name'
    | 'central.tab_headers.public'
    | 'central.tab_headers.private'
    | 'central.tab_headers.connections'
    | 'central.tab_footers.public'
    | 'central.tab_footers.private'
    | 'central.tab_footers.connections'
    | 'central.loading'
    | 'central.building_indexes'
    | 'central.tabs.public.accessibility_label'
    | 'central.tabs.private.accessibility_label'
    | 'central.tabs.connections.accessibility_label'
    | 'public.floating_action_button.compose'
    | 'public.empty.title'
    | 'public.empty.description'
    | 'private.floating_action_button.compose'
    | 'private.empty.title'
    | 'private.empty.description'
    | 'private.conversation.accessibility_label'
    | 'accounts.reactions.title'
    | 'accounts.recipients.title'
    | 'accounts.call_to_action.open_account.accessibility_label'
    | 'connections.floating_action_button.create_invite'
    | 'connections.floating_action_button.paste_invite'
    | 'connections.floating_action_button.bluetooth_seek'
    | 'connections.empty.offline.title'
    | 'connections.empty.offline.description'
    | 'connections.empty.connecting.title'
    | 'connections.empty.connecting.description'
    | 'connections.empty.no_peers.title'
    | 'connections.empty.no_peers.description'
    | 'connections.toasts.invite_accepted'
    | 'connections.toasts.invite_rejected'
    | 'connections.peers.types.bluetooth'
    | 'connections.peers.types.lan'
    | 'connections.peers.types.dht.connected'
    | 'connections.peers.types.dht.staging.host'
    | 'connections.peers.types.dht.staging.client'
    | 'connections.peers.types.dht.staging.unknown'
    | 'connections.peers.types.room.server'
    | 'connections.peers.types.room.endpoint'
    | 'connections.peers.types.room.alone_online'
    | 'connections.peers.types.room.others_online'
    | 'connections.peers.types.pub'
    | 'connections.peers.types.server'
    | 'connections.peers.types.unknown'
    | 'connections.modes.generic.enabled'
    | 'connections.modes.bluetooth.title'
    | 'connections.modes.bluetooth.accessibility_label'
    | 'connections.modes.bluetooth.disabled'
    | 'connections.modes.bluetooth.description'
    | 'connections.modes.bluetooth.permission_request.title'
    | 'connections.modes.bluetooth.permission_request.message'
    | 'connections.modes.wifi.title'
    | 'connections.modes.wifi.accessibility_label'
    | 'connections.modes.wifi.disabled'
    | 'connections.modes.wifi.description'
    | 'connections.modes.p2p.title'
    | 'connections.modes.p2p.accessibility_label'
    | 'connections.modes.p2p.disabled'
    | 'connections.modes.p2p.description'
    | 'connections.modes.p2p.connecting'
    | 'connections.modes.p2p.searching_friend'
    | 'connections.modes.p2p.waiting_friend'
    | 'connections.modes.servers.title'
    | 'connections.modes.servers.accessibility_label'
    | 'connections.modes.servers.disabled'
    | 'connections.modes.servers.description'
    | 'connections.menu.open_profile.label'
    | 'connections.menu.open_profile.accessibility_label.connected'
    | 'connections.menu.open_profile.accessibility_label.staged'
    | 'connections.menu.connect.label'
    | 'connections.menu.connect.accessibility_label.staged_peer'
    | 'connections.menu.connect.accessibility_label.staged_room'
    | 'connections.menu.follow_connect.label'
    | 'connections.menu.follow_connect.accessibility_label'
    | 'connections.menu.disconnect.label'
    | 'connections.menu.disconnect.accessibility_label.peer'
    | 'connections.menu.disconnect.accessibility_label.room'
    | 'connections.menu.disconnect_forget.label'
    | 'connections.menu.disconnect_forget.accessibility_label.peer'
    | 'connections.menu.disconnect_forget.accessibility_label.room'
    | 'connections.menu.forget.label'
    | 'connections.menu.forget.accessibility_label.room'
    | 'connections.menu.room_share_invite.label'
    | 'connections.menu.room_share_invite.accessibility_label'
    | 'connections.menu.invite_info.label'
    | 'connections.menu.invite_info.accessibility_label'
    | 'connections.menu.invite_note.label'
    | 'connections.menu.invite_note.accessibility_label'
    | 'connections.menu.invite_share.label'
    | 'connections.menu.invite_share.accessibility_label'
    | 'connections.menu.invite_delete.label'
    | 'connections.menu.invite_delete.accessibility_label'
    | 'connections.notes.add.title'
    | 'connections.notes.add.description'
    | 'connections.share_code.p2p.title'
    | 'connections.share_code.p2p.message'
    | 'connections.share_code.p2p.dialog_note'
    | 'connections.share_code.room.title'
    | 'connections.share_code.room.message'
    | 'connections.share_code.room.dialog_note'
    | 'compose.call_to_action.publish_new_thread.label'
    | 'compose.call_to_action.publish_new_thread.accessibility_label'
    | 'compose.call_to_action.reply_to_thread.label'
    | 'compose.call_to_action.reply_to_thread.accessibility_label'
    | 'compose.call_to_action.preview.accessibility_label'
    | 'compose.call_to_action.close.accessibility_label'
    | 'compose.call_to_action.record_audio.accessibility_label'
    | 'compose.call_to_action.record_audio.permission_request.title'
    | 'compose.call_to_action.record_audio.permission_request.message'
    | 'compose.call_to_action.record_audio.permission_request.neutral'
    | 'compose.call_to_action.record_audio.permission_request.positive'
    | 'compose.call_to_action.record_audio.permission_request.negative'
    | 'compose.call_to_action.open_camera.accessibility_label'
    | 'compose.call_to_action.add_picture.accessibility_label'
    | 'compose.dialogs.content_warning.title'
    | 'compose.dialogs.content_warning.description'
    | 'compose.dialogs.image_caption.title'
    | 'compose.dialogs.image_caption.description'
    | 'compose.dialogs.save_prompt.title'
    | 'compose.content_warning_initials.label'
    | 'compose.content_warning_initials.accessibility_label'
    | 'compose.mention_field.accessibility_label'
    | 'compose.text_field.placeholder'
    | 'compose.text_field.accessibility_label'
    | 'compose_audio.title'
    | 'compose_audio.call_to_action.start_recording.accessibility_label'
    | 'compose_audio.call_to_action.stop_recording.accessibility_label'
    | 'compose_audio.call_to_action.discard_recording.label'
    | 'compose_audio.call_to_action.discard_recording.accessibility_label'
    | 'compose_audio.call_to_action.submit_recording.label'
    | 'compose_audio.call_to_action.submit_recording.accessibility_label'
    | 'compose_audio.dialogs.discard.title'
    | 'compose_audio.dialogs.discard.question'
    | 'backup.title'
    | 'backup.introduction.title'
    | 'backup.data.title'
    | 'backup.data.description.1_normal'
    | 'backup.data.description.2_bold'
    | 'backup.data.description.3_normal'
    | 'backup.data.description.4_bold'
    | 'backup.data.description.5_normal'
    | 'backup.data.description.6_bold'
    | 'backup.data.description.7_normal'
    | 'backup.data.call_to_action.acknowledge.label'
    | 'backup.data.call_to_action.acknowledge.accessibility_label'
    | 'backup.identity.title'
    | 'backup.identity.description.1_normal'
    | 'backup.identity.description.2_bold'
    | 'backup.identity.description.3_normal'
    | 'backup.identity.description.4_bold'
    | 'backup.identity.description.5_normal'
    | 'backup.identity.description.6_bold'
    | 'backup.identity.description.7_normal'
    | 'backup.identity.call_to_action.show_recovery_phrase'
    | 'biography.picture.accessibility_label'
    | 'biography.description.accessibility_label'
    | 'conversation.title'
    | 'conversation.placeholder'
    | 'conversation.call_to_action.show_recipients.accessibility_label'
    | 'conversation.notifications.new_conversation'
    | 'dialog_about.title'
    | 'dialog_about.version'
    | 'dialog_about.copyright'
    | 'dialog_about.authors'
    | 'dialog_about.repository'
    | 'dialog_about.licensed'
    | 'dialog_thanks.title'
    | 'dialog_thanks.description'
    | 'drawer.profile_no_name'
    | 'drawer.menu.my_profile.label'
    | 'drawer.menu.my_profile.accessibility_label'
    | 'drawer.menu.raw_database.label'
    | 'drawer.menu.raw_database.accessibility_label'
    | 'drawer.menu.email_bug_report.label'
    | 'drawer.menu.email_bug_report.accessibility_label'
    | 'drawer.menu.settings.label'
    | 'drawer.menu.settings.accessibility_label'
    | 'drawer.menu.preparing_database.label'
    | 'drawer.menu.ready_estimate.label'
    | 'invite_create.loading'
    | 'invite_create.call_to_action.share.accessibility_label'
    | 'invite_create.invite_code.accessibility_label'
    | 'invite_create.share_info.1_normal'
    | 'invite_create.share_info.2_bold'
    | 'invite_create.share_info.3_normal'
    | 'invite_create.sync_info.1_normal'
    | 'invite_create.sync_info.2_bold'
    | 'invite_create.sync_info.3_normal'
    | 'invite_paste.placeholder'
    | 'invite_paste.call_to_action.accept.accessibility_label'
    | 'invite_paste.text_field.accessibility_label'
    | 'libraries.title'
    | 'libraries.description'
    | 'libraries.image.name'
    | 'libraries.image.attribution'
    | 'profile.call_to_action.copy_cypherlink'
    | 'profile.call_to_action.private_chat'
    | 'profile.call_to_action.block'
    | 'profile.call_to_action.block_secretly'
    | 'profile.call_to_action.unblock'
    | 'profile.call_to_action.unblock_secretly'
    | 'profile.call_to_action.follow'
    | 'profile.call_to_action.edit_profile.label'
    | 'profile.call_to_action.edit_profile.accessibility_label'
    | 'profile.call_to_action.open_biography.label'
    | 'profile.call_to_action.open_biography.accessibility_label'
    | 'profile.call_to_action.manage.accessibility_label'
    | 'profile.dialog_etc.title'
    | 'profile.toast.copied_to_clipboard'
    | 'profile.info.follows_you'
    | 'profile.info.blocks_you'
    | 'profile.info.following'
    | 'profile.picture.accessibility_label'
    | 'profile.name.accessibility_label'
    | 'profile.empty.blocked.title'
    | 'profile.empty.blocked.description'
    | 'profile.empty.no_self_messages.title'
    | 'profile.empty.no_self_messages.description'
    | 'profile.empty.no_messages.title'
    | 'profile.empty.no_messages.description'
    | 'profile.floating_action_button.compose'
    | 'profile_edit.title'
    | 'profile_edit.call_to_action.discard'
    | 'profile_edit.call_to_action.save.label'
    | 'profile_edit.call_to_action.save.accessibility_label'
    | 'profile_edit.call_to_action.edit_picture.accessbility_label'
    | 'profile_edit.dialogs.discard.title'
    | 'profile_edit.dialogs.discard.question'
    | 'profile_edit.fields.name.label'
    | 'profile_edit.fields.name.accessibility_label'
    | 'profile_edit.fields.description.label'
    | 'profile_edit.fields.description.accessibility_label'
    | 'raw_db.title'
    | 'raw_db.item.type.any'
    | 'raw_db.item.type.encrypted'
    | 'raw_msg.title'
    | 'recipients_input.title'
    | 'recipients_input.call_to_action.proceed.label'
    | 'recipients_input.call_to_action.proceed.accessibility_label'
    | 'recipients_input.fields.mention_input.placeholder'
    | 'recipients_input.fields.mention_input.accessibility_label'
    | 'recipients_input.empty.instructions.title'
    | 'recipients_input.empty.instructions.description'
    | 'recipients_input.empty.none_to_choose.title'
    | 'recipients_input.empty.none_to_choose.description'
    | 'recipients_input.toasts.limit_reached'
    | 'secret_input.practice.title'
    | 'secret_input.practice.header'
    | 'secret_input.restore.title'
    | 'secret_input.header'
    | 'secret_input.call_to_action.confirm.label'
    | 'secret_input.call_to_action.confirm.accessibility_label'
    | 'secret_input.fields.words_input.placeholder'
    | 'secret_input.fields.words_input.accessibility_label'
    | 'secret_input.dialogs.practice.correct.title'
    | 'secret_input.dialogs.practice.correct.description'
    | 'secret_input.dialogs.practice.incorrect.title'
    | 'secret_input.dialogs.practice.incorrect.description'
    | 'secret_input.dialogs.restore.correct.title'
    | 'secret_input.dialogs.restore.correct.description'
    | 'secret_input.dialogs.restore.incorrect.title'
    | 'secret_input.dialogs.restore.incorrect.description.try_again'
    | 'secret_input.dialogs.restore.incorrect.description.overwrite_risk'
    | 'secret_input.dialogs.restore.incorrect.description.too_short'
    | 'secret_input.dialogs.restore.incorrect.description.too_long'
    | 'secret_input.dialogs.restore.incorrect.description.wrong_length'
    | 'secret_input.dialogs.restore.incorrect.description.generic'
    | 'secret_output.title'
    | 'secret_output.header.1_normal'
    | 'secret_output.header.2_bold'
    | 'secret_output.header.3_normal'
    | 'secret_output.footer.1_normal'
    | 'secret_output.footer.2_bold'
    | 'secret_output.footer.3_normal'
    | 'secret_output.footer.4_bold'
    | 'secret_output.footer.5_normal'
    | 'secret_output.words.accessibility_label'
    | 'secret_output.call_to_action.confirm.accessibility_label'
    | 'secret_output.loading'
    | 'settings.title'
    | 'settings.preferences.title'
    | 'settings.preferences.show_follows.title'
    | 'settings.preferences.show_follows.subtitle'
    | 'settings.preferences.show_follows.accessibility_label'
    | 'settings.preferences.hops.title'
    | 'settings.preferences.hops.subtitle'
    | 'settings.preferences.hops.unlimited'
    | 'settings.preferences.hops.accessibility_label'
    | 'settings.data_and_storage.title'
    | 'settings.data_and_storage.backup.title'
    | 'settings.data_and_storage.backup.subtitle'
    | 'settings.data_and_storage.backup.accessibility_label'
    | 'settings.data_and_storage.blobs_storage.title'
    | 'settings.data_and_storage.blobs_storage.subtitle'
    | 'settings.data_and_storage.blobs_storage.unlimited'
    | 'settings.data_and_storage.blobs_storage.accessibility_label'
    | 'settings.troubleshooting.title'
    | 'settings.troubleshooting.bug_report.title'
    | 'settings.troubleshooting.bug_report.accessibility_label'
    | 'settings.troubleshooting.detailed_logs.title'
    | 'settings.troubleshooting.detailed_logs.accessibility_label'
    | 'settings.more_information.title'
    | 'settings.more_information.thanks.title'
    | 'settings.more_information.thanks.accessibility_label'
    | 'settings.more_information.third_party_libs.title'
    | 'settings.more_information.third_party_libs.accessibility_label'
    | 'settings.more_information.about.title'
    | 'settings.more_information.about.accessibility_label'
    | 'settings.dialogs.restart_required.title'
    | 'settings.dialogs.restart_required.description'
    | 'thread.title'
    | 'thread.call_to_action.expand_reply.accessibility_label'
    | 'thread.call_to_action.publish_reply.accessibility_label'
    | 'thread.dialogs.save_draft_prompt.title'
    | 'thread.fields.reply.placeholder'
    | 'thread.fields.reply.accessibility_label'
    | 'thread.loading_replies'
    | 'thread.empty.missing.title'
    | 'thread.empty.missing.description'
    | 'thread.empty.blocked.title'
    | 'thread.empty.blocked.description'
    | 'thread.empty.incompatible.title'
    | 'thread.empty.incompatible.description'
    | 'message.call_to_action.show_reactions.accessibility_label'
    | 'message.call_to_action.add_reaction.accessibility_label'
    | 'message.call_to_action.reply.accessibility_label'
    | 'message.call_to_action.etc.dialog_title'
    | 'message.call_to_action.etc.accessibility_label'
    | 'message.call_to_action.copy_blob_id.accessibility_label'
    | 'message.call_to_action.copy_msg_id'
    | 'message.call_to_action.view_raw'
    | 'message.call_to_action.read_more.label'
    | 'message.call_to_action.read_more.accessibility_label'
    | 'message.toast.copied_to_clipboard'
    | 'message.reactions.categories.smileys_and_emotion'
    | 'message.reactions.categories.people_and_body'
    | 'message.reactions.categories.animals_and_nature'
    | 'message.reactions.categories.food_and_drink'
    | 'message.reactions.categories.activities'
    | 'message.reactions.categories.travel_and_places'
    | 'message.reactions.categories.objects'
    | 'message.reactions.categories.symbols'
    | 'message.reactions.show_more.accessibility_label'
    | 'message.image.without_caption.accessibility_label'
    | 'message.audio.play.accessibility_label'
    | 'message.audio.pause.accessibility_label'
    | 'message.audio.duration.accessibility_label'
    | 'message.audio.elapsed.accessibility_label'
    | 'message.audio.slider.accessibility_label'
    | 'message.content_warning.title'
    | 'message.content_warning.call_to_action.hide'
    | 'message.content_warning.call_to_action.show'
    | 'message.fork_note.1_normal'
    | 'message.fork_note.2_bold'
    | 'message.fork_note.3_normal'
    | 'message.about.new_picture.1_normal'
    | 'message.about.new_picture.2_bold'
    | 'message.about.new_picture.3_normal'
    | 'message.about.new_name_and_description.1_normal'
    | 'message.about.new_name_and_description.2_bold'
    | 'message.about.new_name_and_description.3_normal'
    | 'message.about.new_name_and_description.4_bold'
    | 'message.about.new_name_and_description.5_normal'
    | 'message.about.new_description.1_normal'
    | 'message.about.new_description.2_bold'
    | 'message.about.new_description.3_normal'
    | 'message.about.new_name.1_normal'
    | 'message.about.new_name.2_bold'
    | 'message.about.new_name.3_normal'
    | 'message.about.new_name.4_bold'
    | 'message.about.new_name.5_normal'
    | 'message.contact.follow_event.1_normal'
    | 'message.contact.follow_event.2_bold'
    | 'message.contact.follow_event.3_normal'
    | 'message.contact.follow_event.4_bold'
    | 'message.contact.follow_event.5_normal'
    | 'message.contact.block_event.1_normal'
    | 'message.contact.block_event.2_bold'
    | 'message.contact.block_event.3_normal'
    | 'message.contact.block_event.4_bold'
    | 'message.contact.block_event.5_normal'
    | 'message.contact.unfollow_event.1_normal'
    | 'message.contact.unfollow_event.2_bold'
    | 'message.contact.unfollow_event.3_normal'
    | 'message.contact.unfollow_event.4_bold'
    | 'message.contact.unfollow_event.5_normal'
    | 'message.contact.unblock_event.1_normal'
    | 'message.contact.unblock_event.2_bold'
    | 'message.contact.unblock_event.3_normal'
    | 'message.contact.unblock_event.4_bold'
    | 'message.contact.unblock_event.5_normal';
  function t(key: Key, config?: any): string;
  let fallbacks: boolean;
  let locale: string;
  let defaultLocale: string;
  let translations: Record<string, any>;
}
