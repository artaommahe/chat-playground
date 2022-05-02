import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Messages } from './messages';

export default {
  title: 'Messages',
  component: Messages,
} as ComponentMeta<typeof Messages>;

const Template: ComponentStory<typeof Messages> = (args) => (
  <Messages {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  messages: [
    { id: 'a1', text: 'test message' },
    { id: 'a2', text: 'another test message ' },
    { id: 'a3', text: 'other test message ' },
  ],
};
