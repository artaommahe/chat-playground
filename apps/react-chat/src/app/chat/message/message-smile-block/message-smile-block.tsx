import { styled } from '@mui/material';
import { memo } from 'react';
import { ChatMessageSmileBlock } from '../../core/providers/twitch/blocks/smile/smile.interfaces';

export interface MessageProps {
  block: ChatMessageSmileBlock;
}

function getEmoteUrl(emoteId: string, size: string): string {
  return `https://static-cdn.jtvnw.net/emoticons/v2/${emoteId}/default/dark/${size}`;
}

const StyledMessageSmileBlock = styled('img')(() => ({}));

export const MessageSmileBlock = memo(({ block }: MessageProps) => {
  const emoteLinks = {
    x1: getEmoteUrl(block.emoteId, '1.0'),
    x2: getEmoteUrl(block.emoteId, '2.0'),
    x3: getEmoteUrl(block.emoteId, '3.0'),
  };

  return (
    <StyledMessageSmileBlock
      src={emoteLinks.x2}
      srcSet={`${emoteLinks.x1} 1x, ${emoteLinks.x2} 2x, ${emoteLinks.x3} 4x`}
      alt={block.emoteText}
      title={block.emoteText}
      data-testid="message-smile-block"
    />
  );
});
