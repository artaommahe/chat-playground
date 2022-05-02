export interface ChatMessage {
  id?: string;
  from: {
    id?: string;
    name: string;
    color?: string;
  };
  text: string;
}
