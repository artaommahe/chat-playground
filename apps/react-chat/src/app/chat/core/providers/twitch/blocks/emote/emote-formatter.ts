import {
  ChatMessageFormatter,
  ChatMessageTextBlock,
} from '../../../../message-blocks/message-blocks.interfaces';
import { TwitchMessageEmoteBlock } from './emote.interfaces';

// NOTE: works only as first formatter due to twitch emotes text offset format
export const formatEmoteBlocks: ChatMessageFormatter = (blocks, meta) => {
  if (
    !meta?.tags.emotes ||
    !Object.values(meta?.tags.emotes).length ||
    blocks[0].type !== 'text'
  ) {
    return blocks;
  }

  const messageText = blocks[0].text;
  let lastEndOffset = 0;

  // extract start/end offsets for each emote and sort in asc order by start offset
  const emotes = Object.keys(meta?.tags.emotes)
    .flatMap((emoteId) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const emoteOffsets = meta?.tags.emotes![emoteId];

      return emoteOffsets.map((emoteOffset) => {
        const [start, end] = emoteOffset.split('-').map((offset) => +offset);

        return { start, end, emoteId };
      });
    })
    .sort((a, b) => (a.start > b.start ? 1 : -1));

  let newBlocks = emotes.flatMap(({ start, end, emoteId }) => {
    const emoteBlocks = [
      ...(start > lastEndOffset
        ? [
            {
              type: 'text',
              text: messageText.slice(lastEndOffset, start),
            } as ChatMessageTextBlock,
          ]
        : []),
      {
        type: 'emote',
        id: emoteId,
        text: messageText.slice(start, end + 1),
      } as TwitchMessageEmoteBlock,
    ];

    lastEndOffset = end + 1;

    return emoteBlocks;
  });

  if (lastEndOffset < messageText.length) {
    newBlocks = [
      ...newBlocks,
      {
        type: 'text',
        text: messageText.slice(lastEndOffset, messageText.length),
      },
    ];
  }

  return newBlocks;
};
