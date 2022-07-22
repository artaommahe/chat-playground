import { render, screen } from '@testing-library/react';
import { TwitchMessageEmoteBlock } from '../../core/providers/twitch/blocks/emote/emote.interfaces';
import { MessageEmoteBlock } from './message-emote-block';

describe('chat/message/blocks emote', () => {
  const block: TwitchMessageEmoteBlock = {
    type: 'emote',
    id: '25',
    text: 'Kappa',
  };

  test('should render successfully', () => {
    const { baseElement } = render(<MessageEmoteBlock block={block} />);
    expect(baseElement).toBeTruthy();
  });

  test('should render with proper attributes', () => {
    render(<MessageEmoteBlock block={block} />);

    const imageElement = screen.getByTestId<HTMLImageElement>(
      'message-emote-block'
    );

    expect(imageElement.tagName).toEqual('IMG');
    expect(imageElement.src).toEqual(
      `https://static-cdn.jtvnw.net/emoticons/v2/${block.id}/default/dark/2.0`
    );
    expect(imageElement.srcset).toEqual(
      `https://static-cdn.jtvnw.net/emoticons/v2/${block.id}/default/dark/1.0 1x, https://static-cdn.jtvnw.net/emoticons/v2/${block.id}/default/dark/2.0 2x, https://static-cdn.jtvnw.net/emoticons/v2/${block.id}/default/dark/3.0 4x`
    );
    expect(imageElement.alt).toEqual('Kappa');
    expect(imageElement.title).toEqual('Kappa');
  });
});
