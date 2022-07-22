import { styled } from '@mui/material';
import { memo } from 'react';
import { ChatMessage } from '../chat.interfaces';
import { MessageBlocks } from './message-blocks/message-blocks';

export interface MessageProps {
  message: ChatMessage;
}

const StyledMessage = styled('div')(({ theme }) => ({
  padding: '5px',
  color: theme.palette.text.primary,
  fontSize: theme.typography.fontSize,
  lineHeight: '22px',
}));

const StyledMessageFrom = styled('div')(({ theme, color }) => ({
  display: 'inline-block',
  color: color ?? theme.palette.secondary.main,
}));

export const Message = memo(({ message }: MessageProps) => {
  return (
    <StyledMessage data-testid="message">
      <StyledMessageFrom color={message.from.color} data-testid="message-from">
        {message.from.name}:
      </StyledMessageFrom>{' '}
      <MessageBlocks blocks={message.blocks} />
    </StyledMessage>
  );
});
