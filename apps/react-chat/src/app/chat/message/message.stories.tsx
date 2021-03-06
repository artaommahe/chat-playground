import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StorybookChatThemeContainer } from '../storybook/helpers';
import { Message } from './message';

export default {
  title: 'Message',
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <StorybookChatThemeContainer>
    <Message {...args} />
  </StorybookChatThemeContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  message: {
    id: 'a1',
    from: { name: 'test user', color: '' },
    text: 'test message with https://twitch.tv/ link and Kappa emote',
    blocks: [
      {
        type: 'text',
        text: 'test message with ',
      },
      {
        type: 'link',
        url: 'https://twitch.tv/',
      },
      {
        type: 'text',
        text: ' link and ',
      },
      {
        type: 'emote',
        id: '25',
        text: 'Kappa',
      },
      {
        type: 'text',
        text: ' emote',
      },
    ],
    provider: 'twitch',
  },
};
