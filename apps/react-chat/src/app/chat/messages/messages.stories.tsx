import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StorybookChatThemeContainer } from '../storybook/helpers';
import { Messages } from './messages';

export default {
  title: 'Messages',
  component: Messages,
} as ComponentMeta<typeof Messages>;

const Template: ComponentStory<typeof Messages> = (args) => (
  <StorybookChatThemeContainer>
    <Messages {...args} />
  </StorybookChatThemeContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  messages: [
    { id: 'a1', from: { name: 'test user 1' }, text: 'test message' },
    { id: 'a2', from: { name: 'test user 2' }, text: 'another test message ' },
    { id: 'a3', from: { name: 'test user 3' }, text: 'other test message ' },
  ],
};
