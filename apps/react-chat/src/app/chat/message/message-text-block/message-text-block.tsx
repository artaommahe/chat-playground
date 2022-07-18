import { styled } from '@mui/material';
import { memo } from 'react';
import { ChatMessageTextBlock } from '../../core/message-blocks/message-blocks.interfaces';

export interface MessageTextBlocksProps {
  block: ChatMessageTextBlock;
}

const StyledMessageText = styled('span')(() => ({}));

export const MessageTextBlock = memo(({ block }: MessageTextBlocksProps) => {
  return (
    <StyledMessageText data-testid="message-text-block">
      {block.text}
    </StyledMessageText>
  );
});
