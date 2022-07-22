import { render, screen } from '@testing-library/react';
import { ChatMessageBlock } from '../../core/message-blocks/message-blocks.interfaces';
import { MessageBlocks } from './message-blocks';

export const TEST_MESSAGES_BLOCKS: ChatMessageBlock[] = [
  { type: 'text', text: 'text block' },
  { type: 'link', url: 'https://twitch.tv' },
  { type: 'emote', id: '25', text: 'Kappa' },
];

describe('chat/message/message blocks', () => {
  test('should render successfully', () => {
    const { baseElement } = render(
      <MessageBlocks blocks={TEST_MESSAGES_BLOCKS} />
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render all blocks', () => {
    render(<MessageBlocks blocks={TEST_MESSAGES_BLOCKS} />);

    expect(screen.getByTestId('message-text-block')).toBeDefined();
    expect(screen.getByTestId('message-link-block')).toBeDefined();
    expect(screen.getByTestId('message-emote-block')).toBeDefined();
  });
});
