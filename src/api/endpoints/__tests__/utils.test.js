import { parseArticle, parseSource } from '../utils';

import article from './article-example.json';
import source from './source-example.json';

describe('Endpoint utils test', () => {
  it('Parses an article', () => {
    const expected = {
      sourceName: 'Wired',
      title: 'Inside the Icelandic Facility Where Bitcoin Is Mined',
      url: 'https://www.wired.com/story/iceland-bitcoin-mining-gallery/',
      urlToImage: 'https://media.wired.com/photos/5dbc37a4c955950008b26751/191:100/w_1280,c_limit/photo_barnard_explosions_4.jpg',
      publishedAt: '2019-11-03T15:00:00Z',
    };

    expect(parseArticle(article)).toEqual(expected);
  });

  it('Parses a source', () => {
    const expected = {
      id: 'abc-news',
      name: 'ABC News',
    };

    expect(parseSource(source)).toEqual(expected);
  });
});
