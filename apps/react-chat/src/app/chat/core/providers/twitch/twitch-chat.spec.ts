import {
  mockTmiJsConstructorCalls,
  mockTmiJsInstanceMock,
  triggerListener,
} from './__test__/tmi-js-mock';
import { act, renderHook } from '@testing-library/react';
import { useTwitchChat } from './use-twitch-chat';

describe('chat/core/providers twitch', () => {
  const channel = 'test-channel';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('base', () => {
    test('should init tmi.js lib with proper values', () => {
      renderHook(useTwitchChat, { initialProps: { channel } });

      expect(mockTmiJsConstructorCalls).toHaveBeenCalledTimes(1);
      expect(mockTmiJsConstructorCalls).toHaveBeenLastCalledWith({
        channels: [channel],
        options: {
          debug: false,
        },
      });
    });

    test('should call connect method on start', () => {
      renderHook(useTwitchChat, { initialProps: { channel } });

      expect(mockTmiJsInstanceMock.connect).toHaveBeenCalledTimes(1);
    });

    test('should properly cleanup', () => {
      const { unmount } = renderHook(useTwitchChat, {
        initialProps: { channel },
      });

      expect(mockTmiJsInstanceMock.removeAllListeners).not.toHaveBeenCalled();
      expect(mockTmiJsInstanceMock.disconnect).not.toHaveBeenCalled();

      unmount();

      expect(mockTmiJsInstanceMock.removeAllListeners).toHaveBeenCalledTimes(1);
      expect(mockTmiJsInstanceMock.disconnect).toHaveBeenCalledTimes(1);
    });

    test('should reconnect on new channel received', () => {
      const otherChannel = 'other-channel';
      const { rerender } = renderHook(useTwitchChat, {
        initialProps: { channel },
      });

      expect(mockTmiJsConstructorCalls).toHaveBeenCalledTimes(1);
      expect(mockTmiJsInstanceMock.connect).toHaveBeenCalledTimes(1);
      expect(mockTmiJsInstanceMock.removeAllListeners).not.toHaveBeenCalled();
      expect(mockTmiJsInstanceMock.disconnect).not.toHaveBeenCalled();

      rerender({ channel: otherChannel });

      expect(mockTmiJsInstanceMock.removeAllListeners).toHaveBeenCalledTimes(1);
      expect(mockTmiJsInstanceMock.disconnect).toHaveBeenCalledTimes(1);
      expect(mockTmiJsConstructorCalls).toHaveBeenCalledTimes(2);
      expect(mockTmiJsConstructorCalls).toHaveBeenLastCalledWith({
        channels: [otherChannel],
        options: {
          debug: false,
        },
      });
      expect(mockTmiJsInstanceMock.connect).toHaveBeenCalledTimes(2);
    });
  });

  describe('isConnected', () => {
    test('should return initial value', () => {
      const { result } = renderHook(useTwitchChat, {
        initialProps: { channel },
      });

      expect(result.current.isConnected).toEqual(false);
    });

    test('should update isConnected value on channel joined', () => {
      const { result } = renderHook(useTwitchChat, {
        initialProps: { channel },
      });

      act(() => {
        triggerListener('join');
      });

      expect(result.current.isConnected).toEqual(true);
    });
  });

  describe('messages', () => {
    test('should return initial value', () => {
      const { result } = renderHook(useTwitchChat, {
        initialProps: { channel },
      });

      expect(result.current.messages).toEqual([]);
    });

    test('should start listening passed channel messages', () => {
      renderHook(useTwitchChat, { initialProps: { channel } });

      expect(mockTmiJsInstanceMock.on).toHaveBeenCalledWith(
        'message',
        expect.any(Function)
      );
    });

    test('should update messages with received ones', () => {
      const { result } = renderHook(useTwitchChat, {
        initialProps: { channel },
      });

      act(() => {
        triggerListener(
          'message',
          channel,
          {
            id: 'a-b-c-1',
            'user-id': '123',
            username: 'UserName',
            color: '#123456',
          },
          'message text'
        );
      });

      expect(result.current.messages).toEqual([
        {
          id: 'a-b-c-1',
          from: {
            id: '123',
            name: 'UserName',
            color: '#123456',
          },
          text: 'message text',
          blocks: [{ type: 'text', text: 'message text' }],
          provider: 'twitch',
          providerMeta: {
            tags: {
              id: 'a-b-c-1',
              'user-id': '123',
              username: 'UserName',
              color: '#123456',
            },
          },
        },
      ]);

      act(() => {
        triggerListener(
          'message',
          channel,
          {
            id: 'a-b-c-2',
            'user-id': '456',
          },
          'other message text'
        );
      });

      expect(result.current.messages).toEqual([
        {
          id: 'a-b-c-1',
          from: {
            id: '123',
            name: 'UserName',
            color: '#123456',
          },
          text: 'message text',
          blocks: [{ type: 'text', text: 'message text' }],
          provider: 'twitch',
          providerMeta: {
            tags: {
              id: 'a-b-c-1',
              'user-id': '123',
              username: 'UserName',
              color: '#123456',
            },
          },
        },
        {
          id: 'a-b-c-2',
          from: {
            id: '456',
            name: '(unknown)',
            color: undefined,
          },
          text: 'other message text',
          blocks: [{ type: 'text', text: 'other message text' }],
          provider: 'twitch',
          providerMeta: {
            tags: {
              id: 'a-b-c-2',
              'user-id': '456',
            },
          },
        },
      ]);
    });
  });
});
