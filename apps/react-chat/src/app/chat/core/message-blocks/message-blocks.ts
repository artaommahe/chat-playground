import { TwitchProviderMeta } from '../providers/twitch/twitch.interfaces';
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
  formatters: ChatMessageFormatter[];
}): ChatMessageBlock[] {
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
