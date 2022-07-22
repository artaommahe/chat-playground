import { formatLinksBlocks } from './link/link-formatter';
import { formatSmileBlocks } from './smile/smile-formatter';

export const DEFAULT_FORMATTERS = [formatSmileBlocks, formatLinksBlocks];
