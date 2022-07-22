import { styled } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useState } from 'react';
import { ChatMessage } from '../chat.interfaces';
import { StorybookChatThemeContainer } from '../storybook/helpers';
import { MessagesList } from './messages-list';

export const messagesData: ChatMessage[] = [
  {
    id: 'a1',
    from: { name: 'test user 1' },
    text: 'test message',
    blocks: [{ type: 'text', text: 'test message' }],
    provider: 'twitch',
  },
  {
    id: 'a2',
    from: { name: 'test user 2' },
    text: 'spam 1',
    blocks: [{ type: 'text', text: 'spam 1' }],
    provider: 'twitch',
  },
  {
    id: 'a3',
    from: { name: 'test user 2' },
    text: 'spam 2',
    blocks: [{ type: 'text', text: 'spam 2' }],
    provider: 'twitch',
  },
  {
    id: 'a4',
    from: { name: 'test user 2' },
    text: 'spam 3',
    blocks: [{ type: 'text', text: 'spam 3' }],
    provider: 'twitch',
  },
  {
    id: 'a5',
    from: { name: 'test user 2' },
    text: 'spam 4',
    blocks: [{ type: 'text', text: 'spam 4' }],
    provider: 'twitch',
  },
  {
    id: 'a6',
    from: { name: 'test user 2' },
    text: 'spam 5',
    blocks: [{ type: 'text', text: 'spam 5' }],
    provider: 'twitch',
  },
  {
    id: 'a7',
    from: { name: 'test user 2' },
    text: 'spam 6',
    blocks: [{ type: 'text', text: 'spam 6' }],
    provider: 'twitch',
  },
  {
    id: 'b1',
    from: { name: 'test user 1' },
    text: 'more spam 1',
    blocks: [{ type: 'text', text: 'more spam 1' }],
    provider: 'twitch',
  },
  {
    id: 'b2',
    from: { name: 'test user 1' },
    text: 'more spam 2',
    blocks: [{ type: 'text', text: 'more spam 2' }],
    provider: 'twitch',
  },
  {
    id: 'b3',
    from: { name: 'test user 1' },
    text: 'more spam 3',
    blocks: [{ type: 'text', text: 'more spam 3' }],
    provider: 'twitch',
  },
  {
    id: 'b4',
    from: { name: 'test user 1' },
    text: 'more spam 4',
    blocks: [{ type: 'text', text: 'more spam 4' }],
    provider: 'twitch',
  },
  {
    id: 'b5',
    from: { name: 'test user 1' },
    text: 'more spam 5',
    blocks: [{ type: 'text', text: 'more spam 5' }],
    provider: 'twitch',
  },
  {
    id: 'b6',
    from: { name: 'test user 1' },
    text: 'more spam 6',
    blocks: [{ type: 'text', text: 'more spam 6' }],
    provider: 'twitch',
  },
  {
    id: 'a8',
    from: { name: 'test user 2' },
    text: 'another test message',
    blocks: [{ type: 'text', text: 'another test message' }],
    provider: 'twitch',
  },
  {
    id: 'a9',
    from: { name: 'test user 3' },
    text: 'other test message',
    blocks: [{ type: 'text', text: 'other test message' }],
    provider: 'twitch',
  },
  {
    id: 'a10',
    from: { name: 'test user 1' },
    text: 'some long long long long long long long long long long long long long (cat) message',
    blocks: [
      {
        type: 'text',
        text: 'some long long long long long long long long long long long long long (cat) message',
      },
    ],
    provider: 'twitch',
  },
  {
    id: 'a11',
    from: { name: 'test user 1' },
    text: 'text with https://twitch.tv link and Kappa',
    blocks: [
      { type: 'text', text: 'text with ' },
      { type: 'link', url: 'https://twitch.tv' },
      { type: 'text', text: ' link and ' },
      { type: 'emote', id: '25', text: 'Kappa' },
    ],
    provider: 'twitch',
  },
];

export default {
  title: 'Messages list',
  component: MessagesList,
  excludeStories: /.*Data$/,
} as ComponentMeta<typeof MessagesList>;

const StorybookMessagesContainer = styled('div')({
  width: '250px',
  height: '200px',
  border: '1px dashed gray',
});

const Template: ComponentStory<typeof MessagesList> = (args) => (
  <StorybookChatThemeContainer>
    <StorybookMessagesContainer>
      <MessagesList {...args} />
    </StorybookMessagesContainer>
  </StorybookChatThemeContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  messages: messagesData,
};

export const Autoscroll: ComponentStory<typeof MessagesList> = (props) => {
  const [messages, setMessages] = useState(props.messages);

  useEffect(() => {
    const newMessageInterval = setInterval(() => {
      setMessages((messages) => [
        ...messages,
        {
          id: `a${messages.length}`,
          from: { name: 'test user 1' },
          text: `message ${messages.length}`,
          blocks: [{ type: 'text', text: `message ${messages.length}` }],
          provider: 'twitch',
        },
      ]);
    }, 1000);

    return () => clearInterval(newMessageInterval);
  }, []);

  return (
    <StorybookChatThemeContainer>
      <StorybookMessagesContainer>
        <MessagesList messages={messages} />
      </StorybookMessagesContainer>
    </StorybookChatThemeContainer>
  );
};
Autoscroll.args = {
  messages: Array.from(Array(20)).map((_, index) => ({
    id: `a${index}`,
    from: { name: 'test user 1' },
    text: `message ${index}`,
    blocks: [{ type: 'text', text: `message ${index}` }],
    provider: 'twitch',
  })),
};
