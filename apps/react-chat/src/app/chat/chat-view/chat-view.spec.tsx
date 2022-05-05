import { render, screen } from '@testing-library/react';
import { ChatView } from './chat-view';

describe('ChatView', () => {
  const channel = 'somechannel';
  const messages = [
    { id: 'a1', from: { name: 'test user 1' }, text: 'test message 1' },
    { id: 'a2', from: { name: 'test user 2' }, text: 'test message 2' },
  ];

  test('should render successfully', () => {
    const { baseElement } = render(
      <ChatView channel={channel} messages={messages} isConnected={true} />
    );
    expect(baseElement).toBeTruthy();
  });

  describe('channel name and loader', () => {
    test('should render channel name and loader if not connected', () => {
      render(
        <ChatView channel={channel} messages={messages} isConnected={false} />
      );

      expect(screen.getByTestId('channel-name').textContent).toEqual(channel);
      expect(screen.getByTestId('channel-loader')).toBeDefined();
      expect(screen.queryByTestId('message')).toBeNull();
    });

    test('should render channel name if connected', () => {
      render(
        <ChatView channel={channel} messages={messages} isConnected={true} />
      );

      expect(screen.getByTestId('channel-name').textContent).toEqual(channel);
      expect(screen.queryByTestId('channel-loader')).toBeNull();
    });
  });

  describe('messages list', () => {
    test('should render messages list', () => {
      render(
        <ChatView channel={channel} messages={messages} isConnected={true} />
      );

      expect(screen.getAllByTestId('message').length).toEqual(2);
    });
  });

  describe('message', () => {
    test('should render message properly', () => {
      render(
        <ChatView
          channel={channel}
          messages={[messages[0]]}
          isConnected={true}
        />
      );

      expect(screen.getByTestId('message-from').textContent).toEqual(
        'test user 1:'
      );
      expect(screen.getByTestId('message-text').textContent).toEqual(
        'test message 1'
      );
    });
  });
});
