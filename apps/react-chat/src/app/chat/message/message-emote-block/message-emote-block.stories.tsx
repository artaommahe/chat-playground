import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TwitchMessageEmoteBlock } from '../../core/providers/twitch/blocks/emote/emote.interfaces';
import { StorybookChatThemeContainer } from '../../storybook/helpers';
import { MessageEmoteBlock } from './message-emote-block';

export default {
  title: 'Message / Block / Emote',
  component: MessageEmoteBlock,
} as ComponentMeta<typeof MessageEmoteBlock>;

const Template: ComponentStory<typeof MessageEmoteBlock> = (args) => (
  <StorybookChatThemeContainer>
    <MessageEmoteBlock {...args} />
  </StorybookChatThemeContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  block: {
    type: 'emote',
    id: '25',
    text: 'Kappa',
  } as TwitchMessageEmoteBlock,
};
