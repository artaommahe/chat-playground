import { DEFAULT_FORMATTERS } from './message-blocks.consts';
import {
  ChatMessageBlock,
  ChatMessageFormatter,
} from './message-blocks.interfaces';

export function formatMessageTextToBlocks(
  text: string,
  formatters: ChatMessageFormatter[] = DEFAULT_FORMATTERS
): ChatMessageBlock[] {
  const initialBlocks: ChatMessageBlock[] = [
    {
      type: 'text',
      text,
    },
  ];

  const blocks = formatters.reduce(
    (blocks, parser) => parser(blocks),
    initialBlocks
  );

  return blocks;
}
