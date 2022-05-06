export interface ChatMessageTextBlock {
  type: 'text';
  text: string;
}

export interface ChatMessageLinkBlock {
  type: 'link';
  url: string;
}

export type ChatMessageBlock = ChatMessageTextBlock | ChatMessageLinkBlock;

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
