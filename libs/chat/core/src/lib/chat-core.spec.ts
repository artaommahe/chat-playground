import { ChatCore } from './chat-core';
import {
  adapterMock,
  FirstTestAdapter,
  firstTestAdapterConfig,
  createChatCoreWithTwoAdapters,
  secondTestAdapterConfig,
  SecondTestAdapter,
} from './__test__/chat-core';

describe('chat/core', () => {
  let chatCore: ChatCore;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should init without adapters', () => {
    expect(
      () => (chatCore = new ChatCore({ adapters: [] }))
    ).not.toThrowError();
  });

  test('should init with provided adapter', () => {
    expect(
      () =>
        (chatCore = new ChatCore({
          adapters: [
            {
              name: 'first',
              adapter: FirstTestAdapter,
              config: firstTestAdapterConfig,
            },
          ],
        }))
    ).not.toThrowError();

    expect(adapterMock.constructor).toHaveBeenCalledTimes(1);
    expect(adapterMock.constructor).toHaveBeenLastCalledWith(
      firstTestAdapterConfig
    );
  });

  test('should support multiple adapters init', () => {
    expect(
      () => (chatCore = createChatCoreWithTwoAdapters())
    ).not.toThrowError();

    expect(adapterMock.constructor).toHaveBeenCalledTimes(2);
    expect(adapterMock.constructor.mock.calls).toEqual([
      [firstTestAdapterConfig],
      [secondTestAdapterConfig],
    ]);
  });

  test('should destroy adapters', () => {
    chatCore = createChatCoreWithTwoAdapters();

    expect(adapterMock.destroy).not.toHaveBeenCalled();

    chatCore.destroy();

    expect(adapterMock.destroy).toHaveBeenCalledTimes(2);
  });

  test('should not destroy twice', () => {
    chatCore = createChatCoreWithTwoAdapters();

    expect(adapterMock.destroy).not.toHaveBeenCalled();

    chatCore.destroy();

    expect(() => chatCore.destroy()).toThrowError();
  });

  test('should allow to get specific provider directly', () => {
    chatCore = createChatCoreWithTwoAdapters();

    expect(chatCore.getAdapter('first') instanceof FirstTestAdapter).toEqual(
      true
    );
    expect(chatCore.getAdapter('second') instanceof SecondTestAdapter).toEqual(
      true
    );
  });

  test('should throw on getting unknown provider', () => {
    chatCore = createChatCoreWithTwoAdapters();

    expect(() => chatCore.getAdapter('unknown')).toThrowError();
  });

  test.todo('should proxy adapters stuff');
});
