import { styled, Typography } from '@mui/material';
import { memo } from 'react';

export interface ChannelProps {
  channel: string;
}

const StyledChannel = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: '5px',
}));

export const Channel = memo(({ channel }: ChannelProps) => {
  return (
    <StyledChannel>
      <Typography>{channel}</Typography>
    </StyledChannel>
  );
});
