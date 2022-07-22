import { ChatMessageBlock } from '../../../../message-blocks/message-blocks.interfaces';
import { formatLinksBlocks } from './link-formatter';

describe('chat/providers/twitch/blocks link', () => {
  const link1 = 'https://en.wikipedia.org/wiki/Thulium';
  const link2 = 'https://en.wikipedia.org/wiki/Ioana_Marinescu';

  test('should return link blocks for each link in text', () => {
    const messageTextBlocks: ChatMessageBlock[] = [
      {
        type: 'text',
        text: `some text ${link1} with some ${link2} links`,
      },
    ];

    expect(formatLinksBlocks(messageTextBlocks)).toEqual([
      { type: 'text', text: 'some text ' },
      { type: 'link', url: link1 },
      { type: 'text', text: ' with some ' },
      { type: 'link', url: link2 },
      { type: 'text', text: ' links' },
    ]);
  });

  test('should return link blocks for links at the start and the end', () => {
    const messageTextBlocks: ChatMessageBlock[] = [
      {
        type: 'text',
        text: `${link1} ${link2}`,
      },
    ];

    expect(formatLinksBlocks(messageTextBlocks)).toEqual([
      { type: 'link', url: link1 },
      { type: 'text', text: ' ' },
      { type: 'link', url: link2 },
    ]);
  });
});
