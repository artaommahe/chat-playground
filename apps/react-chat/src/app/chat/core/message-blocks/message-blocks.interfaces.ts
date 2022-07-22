import { TwitchMessageLinkBlock } from '../providers/twitch/blocks/link/link.interfaces';
import { TwitchMessageEmoteBlock } from '../providers/twitch/blocks/emote/emote.interfaces';
import { TwitchProviderMeta } from '../providers/twitch/twitch.interfaces';

export interface ChatMessageTextBlock {
  type: 'text';
  text: string;
}

export type ChatMessageBlock =
  | ChatMessageTextBlock
  | TwitchMessageLinkBlock
  | TwitchMessageEmoteBlock;

export type ChatMessageFormatter = (
  blocks: ChatMessageBlock[],
  meta?: TwitchProviderMeta
) => ChatMessageBlock[];
