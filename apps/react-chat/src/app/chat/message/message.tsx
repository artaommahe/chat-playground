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

export const Message = memo(({ message }: MessageProps) => {
  return (
    <StyledMessage>
      <StyledMessageFrom color={message.from.color}>
        {message.from.name}:
      </StyledMessageFrom>{' '}
      {message.text}
    </StyledMessage>
  );
});
