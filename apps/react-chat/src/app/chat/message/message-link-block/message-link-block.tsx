import { styled } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { ChatMessageLinkBlock } from '../../chat.interfaces';

export interface MessageProps {
  block: ChatMessageLinkBlock;
}

const StyledMessageLinkBlock = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const MAX_TEXT_LENGTH = 40;

function getLinkText(url: string): string {
  return url.length > MAX_TEXT_LENGTH
    ? `${url.slice(0, MAX_TEXT_LENGTH - 3)}...`
    : url;
}

export const MessageLinkBlock = memo(({ block }: MessageProps) => {
  const [text, setText] = useState(getLinkText(block.url));

  useEffect(() => {
    const newText = getLinkText(block.url);

    setText(newText);
  }, [block.url]);

  return (
    <StyledMessageLinkBlock
      href={block.url}
      target="_blank"
      rel="noopener noreferrer"
      title={block.url}
      data-testid="message-link-block"
    >
      {text}
    </StyledMessageLinkBlock>
  );
});
