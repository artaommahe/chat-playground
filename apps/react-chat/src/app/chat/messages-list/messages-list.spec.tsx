import { render } from '@testing-library/react';
import { MessagesList } from './messages-list';

describe('ChatMessages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MessagesList messages={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
