// eslint-disable-next-line @typescript-eslint/ban-types
let listeners: { [event: string]: Function } = {};

export function triggerListener(event: string, ...args: unknown[]): void {
  listeners[event](...args);
}

export const mockTmiJsConstructorCalls = jest.fn();
export const mockTmiJsInstanceMock = {
  connect: jest.fn(),
  // eslint-disable-next-line @typescript-eslint/ban-types
  on: jest.fn().mockImplementation((event: string, callback: Function) => {
    listeners = { ...listeners, [event]: callback };
  }),
  removeAllListeners: jest.fn(),
  disconnect: jest.fn(),
};

jest.mock('tmi.js', () => ({
  __esModule: true,
  default: {
    Client: function (...args: unknown[]) {
      mockTmiJsConstructorCalls(...args);

      return mockTmiJsInstanceMock;
    },
  },
}));
