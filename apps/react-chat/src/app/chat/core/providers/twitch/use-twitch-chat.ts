import { useEffect, useState } from 'react';
import tmi from 'tmi.js';
import { ChatMessage } from '../../../chat.interfaces';
import { formatMessageTextToBlocks } from '../../message-blocks/message-blocks';
import { TWITCH_PROVIDER } from './twitch.consts';

export interface TwitchChatConfig {
  channel: string;
}

export function useTwitchChat({ channel }: TwitchChatConfig) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const client = new tmi.Client({
      channels: [channel],
      options: {
        debug: false,
      },
    });

    client.connect();

    client.on('join', () => {
      setIsConnected(true);
    });

    client.on('message', (_channel, tags, message) => {
      const blocks = formatMessageTextToBlocks({
        text: message,
        meta: { tags },
      });

      const chatMessage: ChatMessage = {
        id: tags.id,
        from: {
          id: tags['user-id'],
          name: tags.username ?? '(unknown)',
          color: tags.color,
        },
        text: message,
        blocks,
        provider: TWITCH_PROVIDER,
        providerMeta: { tags },
      };

      setMessages((messages) => [...messages, chatMessage]);
    });

    return () => {
      client.removeAllListeners();
      client.disconnect();
    };
  }, [channel]);

  return { messages, isConnected };
}
