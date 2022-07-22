import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatMessageSmileBlock } from '../../core/message-blocks/smile/smile.interfaces';
import { StorybookChatThemeContainer } from '../../storybook/helpers';
import { MessageSmileBlock } from './message-smile-block';

export default {
  title: 'Message / Smile block',
  component: MessageSmileBlock,
} as ComponentMeta<typeof MessageSmileBlock>;

const Template: ComponentStory<typeof MessageSmileBlock> = (args) => (
  <StorybookChatThemeContainer>
    <MessageSmileBlock {...args} />
  </StorybookChatThemeContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  block: {
    type: 'smile',
    emoteId: '25',
    emoteText: 'Kappa',
  } as ChatMessageSmileBlock,
};
