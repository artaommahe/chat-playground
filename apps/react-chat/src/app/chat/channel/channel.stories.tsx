import { styled } from '@mui/system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StorybookChatThemeContainer } from '../storybook/helpers';
import { Channel } from './channel';

export default {
  title: 'Channel',
  component: Channel,
} as ComponentMeta<typeof Channel>;

const StorybookChannelContainer = styled('div')({
  width: '250px',
});

const Template: ComponentStory<typeof Channel> = (args) => (
  <StorybookChatThemeContainer>
    <StorybookChannelContainer>
      <Channel {...args} />
    </StorybookChannelContainer>
  </StorybookChatThemeContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  channel: 'somechannel',
};
