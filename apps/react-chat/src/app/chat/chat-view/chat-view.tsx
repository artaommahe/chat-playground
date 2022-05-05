import { styled } from '@mui/material';
import { memo } from 'react';
import { ChannelLoader } from '../channel-loader/channel-loader';
import { Channel } from '../channel/channel';
import { ChatMessage } from '../chat.interfaces';
import { MessagesList } from '../messages-list/messages-list';
import { ChatThemeProvider } from '../theme';

export interface ChatViewProps {
  isConnected: boolean;
  channel: string;
  messages: ChatMessage[];
}

const StyledChatView = styled('div')(({ theme }) => ({
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

export const ChatView = memo(
  ({ isConnected, channel, messages }: ChatViewProps) => {
    return (
      <ChatThemeProvider>
        <StyledChatView>
          <Channel channel={channel} />

          <StyledMessagesListContainer>
            {isConnected ? (
              <MessagesList messages={messages} />
            ) : (
              <ChannelLoader />
            )}
          </StyledMessagesListContainer>
        </StyledChatView>
      </ChatThemeProvider>
    );
  }
);
