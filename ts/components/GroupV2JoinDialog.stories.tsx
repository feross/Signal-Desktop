// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import * as React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import type { PropsType } from './GroupV2JoinDialog';
import { GroupV2JoinDialog } from './GroupV2JoinDialog';
import { setupI18n } from '../util/setupI18n';
import enMessages from '../../_locales/en/messages.json';

const i18n = setupI18n('en', enMessages);

const createProps = (overrideProps: Partial<PropsType> = {}): PropsType => ({
  memberCount: number('memberCount', overrideProps.memberCount || 12),
  avatar: overrideProps.avatar,
  title: text('title', overrideProps.title || 'Random Group!'),
  approvalRequired: boolean(
    'approvalRequired',
    overrideProps.approvalRequired || false
  ),
  groupDescription: overrideProps.groupDescription,
  join: action('join'),
  onClose: action('onClose'),
  i18n,
});

export default {
  title: 'Components/GroupV2JoinDialog',
};

export function Basic(): JSX.Element {
  return <GroupV2JoinDialog {...createProps()} />;
}

export function ApprovalRequired(): JSX.Element {
  return (
    <GroupV2JoinDialog
      {...createProps({
        approvalRequired: true,
        title: 'Approval required!',
      })}
    />
  );
}

ApprovalRequired.story = {
  name: 'Approval required',
};

export function WithAvatar(): JSX.Element {
  return (
    <GroupV2JoinDialog
      {...createProps({
        avatar: {
          url: '/fixtures/giphy-GVNvOUpeYmI7e.gif',
        },
        title: 'Has an avatar!',
      })}
    />
  );
}

WithAvatar.story = {
  name: 'With avatar',
};

export function WithOneMember(): JSX.Element {
  return (
    <GroupV2JoinDialog
      {...createProps({
        memberCount: 1,
        title: 'Just one member!',
      })}
    />
  );
}

WithOneMember.story = {
  name: 'With one member',
};

export function AvatarLoadingState(): JSX.Element {
  return (
    <GroupV2JoinDialog
      {...createProps({
        avatar: {
          loading: true,
        },
        title: 'Avatar loading!',
      })}
    />
  );
}

AvatarLoadingState.story = {
  name: 'Avatar loading state',
};

export function Full(): JSX.Element {
  return (
    <GroupV2JoinDialog
      {...createProps({
        avatar: {
          url: '/fixtures/giphy-GVNvOUpeYmI7e.gif',
        },
        memberCount: 16,
        groupDescription: 'Discuss meets, events, training, and recruiting.',
        title: 'Underwater basket weavers (LA)',
      })}
    />
  );
}
