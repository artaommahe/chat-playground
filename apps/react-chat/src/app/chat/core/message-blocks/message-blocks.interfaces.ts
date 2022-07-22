import { TwitchProviderMeta } from '../providers/twitch/twitch.interfaces';
import { ChatMessageLinkBlock } from './link/link.interfaces';
import { ChatMessageSmileBlock } from './smile/smile.interfaces';

export interface ChatMessageTextBlock {
  type: 'text';
  text: string;
}

export type ChatMessageBlock =
  | ChatMessageTextBlock
  | ChatMessageLinkBlock
  | ChatMessageSmileBlock;

export type ChatMessageFormatter = (
  blocks: ChatMessageBlock[],
  meta?: TwitchProviderMeta
) => ChatMessageBlock[];
