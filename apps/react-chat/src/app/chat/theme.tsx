import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { blueGrey, grey, teal } from '@mui/material/colors';
import { memo, PropsWithChildren } from 'react';

export const chatTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      light: blueGrey[100],
      dark: blueGrey[700],
    },
    secondary: {
      main: teal[500],
    },
    text: {
      primary: grey[900],
      secondary: grey[600],
    },
    divider: grey[400],
  },
});

export const ChatThemeProvider = memo(
  ({ children }: PropsWithChildren<Record<string, unknown>>) => {
    return <ThemeProvider theme={chatTheme}>{children}</ThemeProvider>;
  }
);
