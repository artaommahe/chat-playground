import { memo } from 'react';
import styled from 'styled-components';
import { useTwitchChat } from './core/twitch-chat';
import { Messages } from './messages/messages';

export interface ChatProps {
  channel?: string;
}

const StyledChatMessage = styled.div`
  color: pink;
`;

const DEFAULT_CHANNEL = 'lestream';

export const Chat = memo(({ channel }: ChatProps) => {
  const { messages } = useTwitchChat({ channel: channel || DEFAULT_CHANNEL });

  return (
    <StyledChatMessage>
      <Messages messages={messages} />
    </StyledChatMessage>
  );
});
