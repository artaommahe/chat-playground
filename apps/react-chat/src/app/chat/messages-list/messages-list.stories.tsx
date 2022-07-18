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
  },
  {
    id: 'a2',
    from: { name: 'test user 2' },
    text: 'spam 1',
    blocks: [{ type: 'text', text: 'spam 1' }],
  },
  {
    id: 'a3',
    from: { name: 'test user 2' },
    text: 'spam 2',
    blocks: [{ type: 'text', text: 'spam 2' }],
  },
  {
    id: 'a4',
    from: { name: 'test user 2' },
    text: 'spam 3',
    blocks: [{ type: 'text', text: 'spam 3' }],
  },
  {
    id: 'a5',
    from: { name: 'test user 2' },
    text: 'spam 4',
    blocks: [{ type: 'text', text: 'spam 4' }],
  },
  {
    id: 'a6',
    from: { name: 'test user 2' },
    text: 'spam 5',
    blocks: [{ type: 'text', text: 'spam 5' }],
  },
  {
    id: 'a7',
    from: { name: 'test user 2' },
    text: 'spam 6',
    blocks: [{ type: 'text', text: 'spam 6' }],
  },
  {
    id: 'b1',
    from: { name: 'test user 1' },
    text: 'more spam 1',
    blocks: [{ type: 'text', text: 'more spam 1' }],
  },
  {
    id: 'b2',
    from: { name: 'test user 1' },
    text: 'more spam 2',
    blocks: [{ type: 'text', text: 'more spam 2' }],
  },
  {
    id: 'b3',
    from: { name: 'test user 1' },
    text: 'more spam 3',
    blocks: [{ type: 'text', text: 'more spam 3' }],
  },
  {
    id: 'b4',
    from: { name: 'test user 1' },
    text: 'more spam 4',
    blocks: [{ type: 'text', text: 'more spam 4' }],
  },
  {
    id: 'b5',
    from: { name: 'test user 1' },
    text: 'more spam 5',
    blocks: [{ type: 'text', text: 'more spam 5' }],
  },
  {
    id: 'b6',
    from: { name: 'test user 1' },
    text: 'more spam 6',
    blocks: [{ type: 'text', text: 'more spam 6' }],
  },
  {
    id: 'a8',
    from: { name: 'test user 2' },
    text: 'another test message',
    blocks: [{ type: 'text', text: 'another test message' }],
  },
  {
    id: 'a9',
    from: { name: 'test user 3' },
    text: 'other test message',
    blocks: [{ type: 'text', text: 'other test message' }],
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
  },
  {
    id: 'a11',
    from: { name: 'test user 1' },
    text: 'text with https://twitch.tv link',
    blocks: [
      { type: 'text', text: 'text with ' },
      { type: 'link', url: 'https://twitch.tv' },
      { type: 'text', text: ' link' },
    ],
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
        },
      ]);
    }, 1000);

    () => clearInterval(newMessageInterval);
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
  })),
};
