import { styled, CircularProgress } from '@mui/material';
import { memo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChannelLoaderProps {}

const StyledChannelLoader = styled('div')(() => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ChannelLoader = memo((_props: ChannelLoaderProps) => {
  return (
    <StyledChannelLoader>
      <CircularProgress />
    </StyledChannelLoader>
  );
});
