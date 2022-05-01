import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatMessages } from './chat-messages';

export default {
  title: 'Messages',
  component: ChatMessages,
} as ComponentMeta<typeof ChatMessages>;

const Template: ComponentStory<typeof ChatMessages> = (args) => (
  <ChatMessages {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  messages: [
    { id: 'a1', text: 'test message' },
    { id: 'a2', text: 'another test message ' },
    { id: 'a3', text: 'other test message ' },
  ],
};
