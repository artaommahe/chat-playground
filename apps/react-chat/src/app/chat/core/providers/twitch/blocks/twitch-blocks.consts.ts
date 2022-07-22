import { formatLinksBlocks } from './link/link-formatter';
import { formatSmileBlocks } from './smile/smile-formatter';

export const BLOCKS_FORMATTERS = [formatSmileBlocks, formatLinksBlocks];
