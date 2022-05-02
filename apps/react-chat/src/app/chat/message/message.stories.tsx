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
  message: { id: 'a1', from: { name: 'test user' }, text: 'test message' },
};
