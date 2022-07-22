import { formatLinksBlocks } from './link/link-formatter';
import { formatEmoteBlocks } from './emote/emote-formatter';

export const BLOCKS_FORMATTERS = [formatEmoteBlocks, formatLinksBlocks];
