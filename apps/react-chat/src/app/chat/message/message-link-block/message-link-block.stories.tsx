import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StorybookChatThemeContainer } from '../../storybook/helpers';
import { MessageLinkBlock } from './message-link-block';

export default {
  title: 'Message / Link block',
  component: MessageLinkBlock,
} as ComponentMeta<typeof MessageLinkBlock>;

const Template: ComponentStory<typeof MessageLinkBlock> = (args) => (
  <StorybookChatThemeContainer>
    <MessageLinkBlock {...args} />
  </StorybookChatThemeContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  block: {
    type: 'link',
    url: 'https://en.wikipedia.org/wiki/Thulium',
  },
};

export const LongLink = Template.bind({});
LongLink.args = {
  block: {
    type: 'link',
    url: 'https://en.wikipedia.org/wiki/Ioana_Marinescu',
  },
};
