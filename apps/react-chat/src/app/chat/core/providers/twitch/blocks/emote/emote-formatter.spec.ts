import { ChatMessageBlock } from '../../../../message-blocks/message-blocks.interfaces';
import { TwitchProviderMeta } from '../../twitch.interfaces';
import { formatEmoteBlocks } from './emote-formatter';

describe('chat/providers/twitch/blocks emote', () => {
  test('should ignore text without emotes', () => {
    const messageWithoutEmotes: ChatMessageBlock[] = [
      {
        type: 'text',
        text: 'no Kappa emote in message because of empty tags',
      },
    ];
    const meta: TwitchProviderMeta = { tags: { emotes: {} } };

    expect(formatEmoteBlocks(messageWithoutEmotes, meta)).toEqual(
      messageWithoutEmotes
    );
  });

  test('should return emote blocks for each emote in text', () => {
    const messageTextBlocks: ChatMessageBlock[] = [
      {
        type: 'text',
        text: 'some text Kappa with Kappa emotes and PogChamp other',
      },
    ];
    const meta: TwitchProviderMeta = {
      tags: {
        emotes: {
          1: ['10-14', '21-25'],
          2: ['38-45'],
        },
      },
    };

    expect(formatEmoteBlocks(messageTextBlocks, meta)).toEqual([
      { type: 'text', text: 'some text ' },
      { type: 'emote', id: '1', text: 'Kappa' },
      { type: 'text', text: ' with ' },
      { type: 'emote', id: '1', text: 'Kappa' },
      { type: 'text', text: ' emotes and ' },
      { type: 'emote', id: '2', text: 'PogChamp' },
      { type: 'text', text: ' other' },
    ]);
  });

  test('should return emote blocks for dense emotes case', () => {
    const messageTextBlocks: ChatMessageBlock[] = [
      {
        type: 'text',
        text: 'KappaPogChampKappa',
      },
    ];
    const meta: TwitchProviderMeta = {
      tags: {
        emotes: {
          1: ['0-4', '13-17'],
          2: ['5-12'],
        },
      },
    };

    expect(formatEmoteBlocks(messageTextBlocks, meta)).toEqual([
      { type: 'emote', id: '1', text: 'Kappa' },
      { type: 'emote', id: '2', text: 'PogChamp' },
      { type: 'emote', id: '1', text: 'Kappa' },
    ]);
  });
});
