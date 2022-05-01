import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatMessage } from './chat-message';

export default {
  title: 'Message',
  component: ChatMessage,
} as ComponentMeta<typeof ChatMessage>;

const Template: ComponentStory<typeof ChatMessage> = (args) => (
  <ChatMessage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  message: { id: 'a1', text: 'test message' },
};
