import { styled } from '@mui/material';
import { memo } from 'react';
import { useTwitchChat } from './core/twitch-chat';
import { MessagesList } from './messages-list/messages-list';
import { ChatThemeProvider } from './theme';

export interface ChatProps {
  channel?: string;
}

const StyledChat = styled('div')({
  //
});

const DEFAULT_CHANNEL = 'lestream';

export const Chat = memo(({ channel }: ChatProps) => {
  const { messages } = useTwitchChat({ channel: channel || DEFAULT_CHANNEL });

  return (
    <ChatThemeProvider>
      <StyledChat>
        <MessagesList messages={messages} />
      </StyledChat>
    </ChatThemeProvider>
  );
});
