import { styled } from '@mui/material';
import { memo } from 'react';
import { ChatMessage } from '../chat.interfaces';

export interface MessageProps {
  message: ChatMessage;
}

const StyledMessage = styled('div')(({ theme }) => ({
  padding: '5px',
  color: theme.palette.text.primary,
  fontSize: theme.typography.fontSize,
}));

const StyledMessageFrom = styled('div')(({ theme, color }) => ({
  display: 'inline-block',
  color: color ?? theme.palette.secondary.main,
}));

const StyledMessageText = styled('div')(() => ({
  display: 'inline-block',
}));

export const Message = memo(({ message }: MessageProps) => {
  return (
    <StyledMessage data-testid="message">
      <StyledMessageFrom color={message.from.color} data-testid="message-from">
        {message.from.name}:
      </StyledMessageFrom>{' '}
      <StyledMessageText data-testid="message-text">
        {message.text}
      </StyledMessageText>
    </StyledMessage>
  );
});
