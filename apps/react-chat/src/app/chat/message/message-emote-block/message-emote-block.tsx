import { styled } from '@mui/material';
import { memo } from 'react';
import { TwitchMessageEmoteBlock } from '../../core/providers/twitch/blocks/emote/emote.interfaces';

export interface MessageProps {
  block: TwitchMessageEmoteBlock;
}

function getEmoteUrl(emoteId: string, size: string): string {
  return `https://static-cdn.jtvnw.net/emoticons/v2/${emoteId}/default/dark/${size}`;
}

const StyledEmoteContainer = styled('div')(() => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '32px',
  height: '32px',
}));

const StyledMessageEmoteBlock = styled('img')(() => ({}));

export const MessageEmoteBlock = memo(({ block }: MessageProps) => {
  const emoteLinks = {
    x1: getEmoteUrl(block.id, '1.0'),
    x2: getEmoteUrl(block.id, '2.0'),
    x3: getEmoteUrl(block.id, '3.0'),
  };

  return (
    <StyledEmoteContainer>
      <StyledMessageEmoteBlock
        src={emoteLinks.x2}
        srcSet={`${emoteLinks.x1} 1x, ${emoteLinks.x2} 2x, ${emoteLinks.x3} 4x`}
        alt={block.text}
        title={block.text}
        data-testid="message-emote-block"
      />
    </StyledEmoteContainer>
  );
});
