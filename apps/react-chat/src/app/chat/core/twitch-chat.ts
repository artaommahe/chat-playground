import { useEffect, useState } from 'react';
import tmi from 'tmi.js';
import { ChatMessage } from '../chat.interfaces';

export interface TwitchChatConfig {
  channel: string;
}

export function useTwitchChat({ channel }: TwitchChatConfig) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const client = new tmi.Client({
      channels: [channel],
    });

    client.connect();

    client.on('message', (channel, tags, message) => {
      const chatMessage: ChatMessage = {
        id: tags.id,
        from: {
          id: tags['user-id'],
          name: tags.username ?? '(unknown)',
        },
        text: message,
      };

      setMessages((messages) => [...messages, chatMessage]);
    });

    return () => {
      client.removeAllListeners();
      client.disconnect();
    };
  }, [channel]);

  return { messages };
}
