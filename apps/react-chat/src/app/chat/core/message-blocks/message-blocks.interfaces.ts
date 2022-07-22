import { ChatMessageLinkBlock } from '../providers/twitch/blocks/link/link.interfaces';
import { ChatMessageSmileBlock } from '../providers/twitch/blocks/smile/smile.interfaces';
import { TwitchProviderMeta } from '../providers/twitch/twitch.interfaces';

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
