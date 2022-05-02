import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Message } from './message';

export default {
  title: 'Message',
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <Message {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  message: { id: 'a1', text: 'test message' },
};
