import {
  ChatMessageBlock,
  ChatMessageLinkBlock,
  ChatMessageTextBlock,
} from './message-blocks.interfaces';
import Autolinker from 'autolinker';

const autolinker = new Autolinker({ email: false, phone: false });

export function formatLinksBlocks(
  blocks: ChatMessageBlock[]
): ChatMessageBlock[] {
  return blocks.flatMap((block) => {
    if (block.type !== 'text') {
      return block;
    }

    let lastLinkEndIndex = 0;

    let newBlocks = autolinker.parse(block.text).flatMap((match) => {
      const url = match.getAnchorHref();
      const text = match.getType() === 'url' ? url : match.getAnchorText();
      const linkIndex = match.getOffset();
      const textBefore = block.text.slice(lastLinkEndIndex, linkIndex);

      const textBeforeBlock: ChatMessageTextBlock | undefined = textBefore
        ? { type: 'text', text: textBefore }
        : undefined;
      const linkBlock: ChatMessageLinkBlock = { type: 'link', url };

      lastLinkEndIndex = linkIndex + text.length;

      return textBeforeBlock ? [textBeforeBlock, linkBlock] : linkBlock;
    });

    if (!newBlocks.length) {
      return block;
    }

    const endingText = block.text.slice(lastLinkEndIndex);

    if (endingText) {
      newBlocks = [...newBlocks, { type: 'text', text: endingText }];
    }

    return newBlocks;
  });
}
