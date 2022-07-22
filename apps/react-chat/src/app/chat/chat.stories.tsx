import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chat } from './chat';

export default {
  title: 'Chat',
  component: Chat,
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  channel: 'artaommahe',
};
