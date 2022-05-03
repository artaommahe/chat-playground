import { styled } from '@mui/system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StorybookChatThemeContainer } from '../storybook/helpers';
import { ChannelLoader } from './channel-loader';

export default {
  title: 'Channel loader',
  component: ChannelLoader,
} as ComponentMeta<typeof ChannelLoader>;

const StorybookChannelContainer = styled('div')({
  width: '250px',
  height: '300px',
  border: '1px dashed gray',
});

const Template: ComponentStory<typeof ChannelLoader> = (args) => (
  <StorybookChatThemeContainer>
    <StorybookChannelContainer>
      <ChannelLoader {...args} />
    </StorybookChannelContainer>
  </StorybookChatThemeContainer>
);

export const Primary = Template.bind({});
Primary.args = {};
