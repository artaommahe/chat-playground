import { ComponentType, memo } from 'react';
import { ChatMessageBlock } from '../../core/message-blocks/message-blocks.interfaces';
import { MessageLinkBlock } from '../message-link-block/message-link-block';
import { MessageEmoteBlock } from '../message-emote-block/message-emote-block';
import { MessageTextBlock } from '../message-text-block/message-text-block';

export interface MessageBlocksProps {
  blocks: ChatMessageBlock[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BLOCKS_RENDERER: Record<ChatMessageBlock['type'], ComponentType<any>> = {
  text: MessageTextBlock,
  link: MessageLinkBlock,
  emote: MessageEmoteBlock,
};

export const MessageBlocks = memo(({ blocks }: MessageBlocksProps) => {
  return (
    <>
      {blocks.map((block, index) => {
        const RenderComponent = BLOCKS_RENDERER[block.type];

        return <RenderComponent key={index} block={block} />;
      })}
    </>
  );
});
