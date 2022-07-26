import { memo, useEffect, useLayoutEffect, useRef } from 'react';
import { Message } from '../message/message';
import { ChatMessage } from '../chat.interfaces';
import { styled } from '@mui/material';

export interface MessagesProps {
  messages: ChatMessage[];
}

const StyledMessagesList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflowY: 'scroll',
});

const SCROLL_TRESHOLD_PX = 70;

export const MessagesList = memo(({ messages }: MessagesProps) => {
  const messagesListRef = useRef<HTMLDivElement>(null);
  const previousMessages = useRef<ChatMessage[] | null>(null);

  useLayoutEffect(() => {
    if (!messagesListRef.current) {
      return;
    }

    const { scrollHeight, scrollTop, clientHeight } = messagesListRef.current;

    if (
      !previousMessages.current ||
      scrollTop + clientHeight > scrollHeight - SCROLL_TRESHOLD_PX
    ) {
      // eslint-disable-next-line functional/immutable-data
      messagesListRef.current.scrollTop = scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    previousMessages.current = messages;
  }, [messages]);

  return (
    <StyledMessagesList ref={messagesListRef}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </StyledMessagesList>
  );
});
