import { ChatMessageBlock } from './core/message-blocks/message-blocks.interfaces';
import { TwitchProviderMeta } from './core/providers/twitch/twitch.interfaces';
import { TWITCH_PROVIDER } from './core/providers/twitch/twitch.consts';

export interface ChatMessage {
  id?: string;
  from: {
    id?: string;
    name: string;
    color?: string;
  };
  text: string;
  blocks: ChatMessageBlock[];
  provider: typeof TWITCH_PROVIDER;
  providerMeta?: TwitchProviderMeta;
}
