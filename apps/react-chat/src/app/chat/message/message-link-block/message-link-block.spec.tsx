import { render, screen } from '@testing-library/react';
import { TwitchMessageLinkBlock } from '../../core/providers/twitch/blocks/link/link.interfaces';
import { MessageLinkBlock } from './message-link-block';

describe('chat/message/blocks link', () => {
  const block: TwitchMessageLinkBlock = {
    type: 'link',
    url: 'https://en.wikipedia.org/wiki/Thulium',
  };

  test('should render successfully', () => {
    const { baseElement } = render(<MessageLinkBlock block={block} />);
    expect(baseElement).toBeTruthy();
  });

  test('should render with proper attributes and text', () => {
    render(<MessageLinkBlock block={block} />);

    const linkElement =
      screen.getByTestId<HTMLAnchorElement>('message-link-block');

    expect(linkElement.tagName).toEqual('A');
    expect(linkElement.textContent).toEqual(block.url);
    expect(linkElement.href).toEqual(block.url);
    expect(linkElement.title).toEqual(block.url);
    expect(linkElement.target).toEqual('_blank');
    expect(linkElement.rel).toEqual('noopener noreferrer');
  });

  test('should render cutted text for long urls', () => {
    const blockWithLongUrl: TwitchMessageLinkBlock = {
      type: 'link',
      url: 'https://en.wikipedia.org/wiki/Ioana_Marinescu',
    };

    render(<MessageLinkBlock block={blockWithLongUrl} />);

    const linkElement =
      screen.getByTestId<HTMLAnchorElement>('message-link-block');

    expect(linkElement.textContent).toEqual(
      'https://en.wikipedia.org/wiki/Ioana_M...'
    );
    expect(linkElement.href).toEqual(blockWithLongUrl.url);
    expect(linkElement.title).toEqual(blockWithLongUrl.url);
  });
});
