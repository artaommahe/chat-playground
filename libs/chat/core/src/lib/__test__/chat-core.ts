import { ChatAdapter, ChatCore } from '../chat-core';

export const adapterMock = {
  constructor: jest.fn(),
  destroy: jest.fn(),
};

export const firstTestAdapterConfig = {
  field1: 'value1',
  field2: 'value2',
};

export class FirstTestAdapter implements ChatAdapter {
  constructor(config: typeof firstTestAdapterConfig) {
    adapterMock.constructor(config);
  }

  destroy(): void {
    adapterMock.destroy();
  }
}

export const secondTestAdapterConfig = {
  field3: 'value3',
  field4: 'value4',
};

export class SecondTestAdapter implements ChatAdapter {
  constructor(config: typeof secondTestAdapterConfig) {
    adapterMock.constructor(config);
  }

  destroy(): void {
    adapterMock.destroy();
  }
}

export function createChatCoreWithTwoAdapters(): ChatCore {
  return new ChatCore({
    adapters: [
      {
        name: 'first',
        adapter: FirstTestAdapter,
        config: firstTestAdapterConfig,
      },
      {
        name: 'second',
        adapter: SecondTestAdapter,
        config: secondTestAdapterConfig,
      },
    ],
  });
}
