import { render } from '@testing-library/react';
import { Channel } from './channel';

describe('Channel', () => {
  const channel = 'somechannel';

  it('should render successfully', () => {
    const { baseElement } = render(<Channel channel={channel} />);
    expect(baseElement).toBeTruthy();
  });
});
