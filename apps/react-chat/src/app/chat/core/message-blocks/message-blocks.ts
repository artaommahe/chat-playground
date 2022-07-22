import { TwitchProviderMeta } from '../providers/twitch/twitch.interfaces';
import { DEFAULT_FORMATTERS } from './message-blocks.consts';
import {
  ChatMessageBlock,
  ChatMessageFormatter,
} from './message-blocks.interfaces';

export function formatMessageTextToBlocks({
  text,
  formatters,
  meta,
}: {
  text: string;
  meta?: TwitchProviderMeta;
  formatters?: ChatMessageFormatter[];
}): ChatMessageBlock[] {
  formatters ??= DEFAULT_FORMATTERS;

  const initialBlocks: ChatMessageBlock[] = [
    {
      type: 'text',
      text,
    },
  ];

  const blocks = formatters.reduce(
    (blocks, parser) => parser(blocks, meta),
    initialBlocks
  );

  return blocks;
}
