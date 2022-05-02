import { memo } from 'react';
import styled from 'styled-components';
import { Message } from '../message/message';
import { ChatMessage } from '../chat.interfaces';

export interface MessagesProps {
  messages: ChatMessage[];
}

const StyledMessages = styled.div`
  color: pink;
`;

export const Messages = memo(({ messages }: MessagesProps) => {
  return (
    <StyledMessages>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </StyledMessages>
  );
});
