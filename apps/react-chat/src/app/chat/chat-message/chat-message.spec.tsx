import { render } from '@testing-library/react';

import { ChatMessage } from './chat-message';

describe('ChatMessage', () => {
  const message = { id: 'a1', text: 'test-message' };

  it('should render successfully', () => {
    const { baseElement } = render(<ChatMessage message={message} />);
    expect(baseElement).toBeTruthy();
  });
});
