import { render } from '@testing-library/react';
import { Message } from './message';

describe('ChatMessage', () => {
  const message = { id: 'a1', text: 'test-message' };

  it('should render successfully', () => {
    const { baseElement } = render(<Message message={message} />);
    expect(baseElement).toBeTruthy();
  });
});
