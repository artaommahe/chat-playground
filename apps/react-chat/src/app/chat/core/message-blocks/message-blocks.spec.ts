import { formatMessageTextToBlocks } from './message-blocks';
import { ChatMessageFormatter } from './message-blocks.interfaces';

describe('chat/core/message-blocks', () => {
  const messageText = 'some text here';

  test('should return only one text block without formatters', () => {
    expect(
      formatMessageTextToBlocks({ text: messageText, formatters: [] })
    ).toEqual([{ type: 'text', text: messageText }]);
  });

  test('should return only one text block without formatters', () => {
    const testFormatter = jest.fn<
      ReturnType<ChatMessageFormatter>,
      Parameters<ChatMessageFormatter>
    >((blocks) => [
      { type: 'text', text: 'prefix' },
      ...blocks,
      { type: 'text', text: 'postfix' },
    ]);

    expect(
      formatMessageTextToBlocks({
        text: messageText,
        formatters: [testFormatter],
      })
    ).toEqual([
      { type: 'text', text: 'prefix' },
      { type: 'text', text: messageText },
      { type: 'text', text: 'postfix' },
    ]);
    expect(testFormatter).toBeCalledTimes(1);
  });
});
