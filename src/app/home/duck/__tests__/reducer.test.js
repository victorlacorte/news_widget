import checkoutReducer, { INITIAL_STATE } from '../reducer';
import types from '../types';

describe('Home reducer', () => {
  it('should return the initial state', () => {
    expect(checkoutReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle the RECEIVE_MORE_ARTICLES action type', () => {
    const state = {
      articles: [
        {
          article1: '',
        },
        {
          article2: '',
        },
      ],
    };

    const moreArticles = [
      {
        article3: '',
      },
    ];

    const expected = {
      loading: false,
      error: false,
      articles: [
        {
          article1: '',
        },
        {
          article2: '',
        },
        {
          article3: '',
        },
      ],
    };

    expect(checkoutReducer(
      state,
      {
        type: types.RECEIVE_MORE_ARTICLES,
        articles: moreArticles,
      },
    ))
      .toEqual(expected);
  });
});
