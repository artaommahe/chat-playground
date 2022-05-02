export interface ChatMessage {
  id?: string;
  from: {
    id?: string;
    name: string;
  };
  text: string;
}
