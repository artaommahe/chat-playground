import { formatMessageTextToBlocks } from './message-blocks';

describe('chat/message-blocks core', () => {
  describe('core', () => {
    test('should return only one text block for plain text', () => {
      const messageText = 'some plain text without other stuff';

      expect(formatMessageTextToBlocks(messageText)).toEqual([
        { type: 'text', text: messageText },
      ]);
    });
  });

  describe('links', () => {
    const link1 = 'https://en.wikipedia.org/wiki/Thulium';
    const link2 = 'https://en.wikipedia.org/wiki/Ioana_Marinescu';

    test('should return link blocks for each link in text', () => {
      const messageText = `some text ${link1} with some ${link2} links`;

      expect(formatMessageTextToBlocks(messageText)).toEqual([
        { type: 'text', text: 'some text ' },
        { type: 'link', url: link1 },
        { type: 'text', text: ' with some ' },
        { type: 'link', url: link2 },
        { type: 'text', text: ' links' },
      ]);
    });

    test('should return link blocks for links at the start and the end', () => {
      const messageText = `${link1} ${link2}`;

      expect(formatMessageTextToBlocks(messageText)).toEqual([
        { type: 'link', url: link1 },
        { type: 'text', text: ' ' },
        { type: 'link', url: link2 },
      ]);
    });
  });
});
