import { ChatMessageBlock } from './message-blocks.interfaces';
import { formatLinksBlocks } from './link-formatter';

const FORMATTERS = [formatLinksBlocks];

export function formatMessageTextToBlocks(text: string): ChatMessageBlock[] {
  const initialBlocks: ChatMessageBlock[] = [
    {
      type: 'text',
      text,
    },
  ];

  const blocks = FORMATTERS.reduce(
    (blocks, parser) => parser(blocks),
    initialBlocks
  );

  return blocks;
}
