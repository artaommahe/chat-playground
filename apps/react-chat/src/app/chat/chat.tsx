import { memo } from 'react';
import { useTwitchChat } from './providers/twitch-chat';
import { ChatView } from './chat-view/chat-view';

export interface ChatProps {
  channel?: string;
}

const DEFAULT_CHANNEL = 'lestream';

export const Chat = memo(({ channel }: ChatProps) => {
  channel = channel || DEFAULT_CHANNEL;

  const { messages, isConnected } = useTwitchChat({ channel });

  return (
    <ChatView channel={channel} messages={messages} isConnected={isConnected} />
  );
});
