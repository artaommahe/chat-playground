import { memo } from 'react';
import styled from 'styled-components';
import { ChatMessage } from '../chat-message/chat-message';
import { Message } from '../chat.interfaces';

export interface ChatMessagesProps {
  messages: Message[];
}

const StyledChatMessages = styled.div`
  color: pink;
`;

export const ChatMessages = memo(({ messages }: ChatMessagesProps) => {
  return (
    <StyledChatMessages>
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </StyledChatMessages>
  );
});
