import { render, screen } from '@testing-library/react';
import { ChatMessageTextBlock } from '../../core/message-blocks/message-blocks.interfaces';
import { MessageTextBlock } from './message-text-block';

describe('chat/message/blocks text', () => {
  const block: ChatMessageTextBlock = {
    type: 'text',
    text: 'some text here',
  };

  test('should render successfully', () => {
    const { baseElement } = render(<MessageTextBlock block={block} />);
    expect(baseElement).toBeTruthy();
  });

  test('should render with proper attributes and text', () => {
    render(<MessageTextBlock block={block} />);

    const textElement =
      screen.getByTestId<HTMLSpanElement>('message-text-block');

    expect(textElement.tagName).toEqual('SPAN');
    expect(textElement.textContent).toEqual(block.text);
  });
});
