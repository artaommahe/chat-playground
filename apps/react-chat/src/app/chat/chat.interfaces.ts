import { ChatMessageBlock } from './core/message-blocks/message-blocks.interfaces';

export interface ChatMessage {
  id?: string;
  from: {
    id?: string;
    name: string;
    color?: string;
  };
  text: string;
  blocks: ChatMessageBlock[];
}
