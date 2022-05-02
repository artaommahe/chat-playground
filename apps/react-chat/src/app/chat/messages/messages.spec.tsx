import { render } from '@testing-library/react';
import { Messages } from './messages';

describe('ChatMessages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Messages messages={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
