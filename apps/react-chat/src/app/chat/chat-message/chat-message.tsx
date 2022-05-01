import { memo } from 'react';
import styled from 'styled-components';
import { Message } from '../chat.interfaces';

export interface ChatMessageProps {
  message: Message;
}

const StyledChatMessage = styled.div`
  color: pink;
`;

export const ChatMessage = memo(({ message }: ChatMessageProps) => {
  return <StyledChatMessage>{message.text}</StyledChatMessage>;
});
