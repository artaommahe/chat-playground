import { render } from '@testing-library/react';

import { ChatMessages } from './chat-messages';

describe('ChatMessages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatMessages messages={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
