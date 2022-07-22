import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TwitchMessageLinkBlock } from '../../core/providers/twitch/blocks/link/link.interfaces';
import { StorybookChatThemeContainer } from '../../storybook/helpers';
import { MessageLinkBlock } from './message-link-block';

export default {
  title: 'Message / Block / Link',
  component: MessageLinkBlock,
} as ComponentMeta<typeof MessageLinkBlock>;

const Template: ComponentStory<typeof MessageLinkBlock> = (args) => (
  <StorybookChatThemeContainer>
    <MessageLinkBlock {...args} />
  </StorybookChatThemeContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  block: {
    type: 'link',
    url: 'https://en.wikipedia.org/wiki/Thulium',
  } as TwitchMessageLinkBlock,
};

export const LongLink = Template.bind({});
LongLink.args = {
  block: {
    type: 'link',
    url: 'https://en.wikipedia.org/wiki/Ioana_Marinescu',
  } as TwitchMessageLinkBlock,
};
