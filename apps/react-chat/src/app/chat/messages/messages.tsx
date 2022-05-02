import { memo } from 'react';
import { Message } from '../message/message';
import { ChatMessage } from '../chat.interfaces';
import { styled } from '@mui/material';

export interface MessagesProps {
  messages: ChatMessage[];
}

const StyledMessages = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const Messages = memo(({ messages }: MessagesProps) => {
  return (
    <StyledMessages>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </StyledMessages>
  );
});
