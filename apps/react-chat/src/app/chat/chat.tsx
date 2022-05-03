import { styled } from '@mui/material';
import { memo } from 'react';
import { Channel } from './channel/channel';
import { useTwitchChat } from './providers/twitch-chat';
import { MessagesList } from './messages-list/messages-list';
import { ChatThemeProvider } from './theme';
import { ChannelLoader } from './channel-loader/channel-loader';

export interface ChatProps {
  channel?: string;
}

const StyledChat = styled('div')(({ theme }) => ({
  width: '300px',
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
  fontSize: theme.typography.h4.fontSize,
}));

const StyledMessagesListContainer = styled('div')({
  height: '300px',
});

const DEFAULT_CHANNEL = 'lestream';

export const Chat = memo(({ channel }: ChatProps) => {
  channel = channel || DEFAULT_CHANNEL;

  const { messages, isConnected } = useTwitchChat({ channel });

  return (
    <ChatThemeProvider>
      <StyledChat>
        <Channel channel={channel} />

        <StyledMessagesListContainer>
          {isConnected ? (
            <MessagesList messages={messages} />
          ) : (
            <ChannelLoader />
          )}
        </StyledMessagesListContainer>
      </StyledChat>
    </ChatThemeProvider>
  );
});
