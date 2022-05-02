import { styled } from '@mui/material';
import { memo, PropsWithChildren } from 'react';
import { ChatThemeProvider } from '../theme';

const Container = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.background.default,
}));

export const StorybookChatThemeContainer = memo(
  ({ children }: PropsWithChildren<Record<string, unknown>>) => {
    return (
      <ChatThemeProvider>
        <Container>{children}</Container>
      </ChatThemeProvider>
    );
  }
);
