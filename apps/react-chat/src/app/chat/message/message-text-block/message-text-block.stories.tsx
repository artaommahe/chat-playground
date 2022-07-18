import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatMessageTextBlock } from '../../core/message-blocks/message-blocks.interfaces';
import { StorybookChatThemeContainer } from '../../storybook/helpers';
import { MessageTextBlock } from './message-text-block';

export default {
  title: 'Message / Text block',
  component: MessageTextBlock,
} as ComponentMeta<typeof MessageTextBlock>;

const Template: ComponentStory<typeof MessageTextBlock> = (args) => (
  <StorybookChatThemeContainer>
    <MessageTextBlock {...args} />
  </StorybookChatThemeContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  block: {
    type: 'text',
    text: 'some text here',
  } as ChatMessageTextBlock,
};
