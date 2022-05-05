import { ComponentMeta, ComponentStory } from '@storybook/react';
import { messagesData } from '../messages-list/messages-list.stories';
import { ChatView } from './chat-view';

export default {
  title: 'ChatView',
  component: ChatView,
} as ComponentMeta<typeof ChatView>;

const Template: ComponentStory<typeof ChatView> = (args) => (
  <ChatView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isConnected: true,
  channel: 'some-channel',
  messages: messagesData,
};
