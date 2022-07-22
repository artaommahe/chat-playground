import { render, screen } from '@testing-library/react';
import { ChatMessageSmileBlock } from '../../core/providers/twitch/blocks/smile/smile.interfaces';
import { MessageSmileBlock } from './message-smile-block';

describe('chat/message/blocks smile', () => {
  const block: ChatMessageSmileBlock = {
    type: 'smile',
    emoteId: '25',
    emoteText: 'Kappa',
  };

  test('should render successfully', () => {
    const { baseElement } = render(<MessageSmileBlock block={block} />);
    expect(baseElement).toBeTruthy();
  });

  test('should render with proper attributes', () => {
    render(<MessageSmileBlock block={block} />);

    const imageElement = screen.getByTestId<HTMLImageElement>(
      'message-smile-block'
    );

    expect(imageElement.tagName).toEqual('IMG');
    expect(imageElement.src).toEqual(
      `https://static-cdn.jtvnw.net/emoticons/v2/${block.emoteId}/default/dark/2.0`
    );
    expect(imageElement.srcset).toEqual(
      `https://static-cdn.jtvnw.net/emoticons/v2/${block.emoteId}/default/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/${block.emoteId}/default/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/${block.emoteId}/default/dark/3.0 4x`
    );
    expect(imageElement.alt).toEqual('Kappa');
    expect(imageElement.title).toEqual('Kappa');
  });
});
