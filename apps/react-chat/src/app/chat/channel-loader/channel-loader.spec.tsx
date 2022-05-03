import { render } from '@testing-library/react';
import { ChannelLoader } from './channel-loader';

describe('Channel loader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChannelLoader />);
    expect(baseElement).toBeTruthy();
  });
});
