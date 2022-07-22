import { TwitchProviderMeta } from '../../providers/twitch/twitch.interfaces';
import { ChatMessageBlock } from '../message-blocks.interfaces';
import { formatSmileBlocks } from './smile-formatter';

describe('chat/core/message-blocks smile', () => {
  test('should ignore text without smiles', () => {
    const messageWithoutSmiles: ChatMessageBlock[] = [
      {
        type: 'text',
        text: 'no Kappa smile in message because of empty tags',
      },
    ];
    const meta: TwitchProviderMeta = { tags: { emotes: {} } };

    expect(formatSmileBlocks(messageWithoutSmiles, meta)).toEqual(
      messageWithoutSmiles
    );
  });

  test('should return smile blocks for each smile in text', () => {
    const messageTextBlocks: ChatMessageBlock[] = [
      {
        type: 'text',
        text: 'some text Kappa with Kappa smiles and PogChamp other',
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

    expect(formatSmileBlocks(messageTextBlocks, meta)).toEqual([
      { type: 'text', text: 'some text ' },
      { type: 'smile', emoteId: '1', emoteText: 'Kappa' },
      { type: 'text', text: ' with ' },
      { type: 'smile', emoteId: '1', emoteText: 'Kappa' },
      { type: 'text', text: ' smiles and ' },
      { type: 'smile', emoteId: '2', emoteText: 'PogChamp' },
      { type: 'text', text: ' other' },
    ]);
  });

  test('should return smile blocks for dense smiles case', () => {
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

    expect(formatSmileBlocks(messageTextBlocks, meta)).toEqual([
      { type: 'smile', emoteId: '1', emoteText: 'Kappa' },
      { type: 'smile', emoteId: '2', emoteText: 'PogChamp' },
      { type: 'smile', emoteId: '1', emoteText: 'Kappa' },
    ]);
  });
});
