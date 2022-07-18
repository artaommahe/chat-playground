export interface ChatMessageTextBlock {
  type: 'text';
  text: string;
}

export interface ChatMessageLinkBlock {
  type: 'link';
  url: string;
}

export type ChatMessageBlock = ChatMessageTextBlock | ChatMessageLinkBlock;
