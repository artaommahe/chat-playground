import { ChatMessageLinkBlock } from './link/link.interfaces';

export interface ChatMessageTextBlock {
  type: 'text';
  text: string;
}

export type ChatMessageBlock = ChatMessageTextBlock | ChatMessageLinkBlock;

export type ChatMessageFormatter = (
  blocks: ChatMessageBlock[]
) => ChatMessageBlock[];
