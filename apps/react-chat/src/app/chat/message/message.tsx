import { memo } from 'react';
import styled from 'styled-components';
import { ChatMessage } from '../chat.interfaces';

export interface MessageProps {
  message: ChatMessage;
}

const StyledMessage = styled.div`
  color: pink;
`;

export const Message = memo(({ message }: MessageProps) => {
  return <StyledMessage>{message.text}</StyledMessage>;
});
