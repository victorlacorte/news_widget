import configureStore from 'redux-mock-store';

import Api from 'api';

import operations from '../operations';
import types from '../types';

const mockStore = configureStore([]);

describe('Home operations', () => {
  it('creates RECEIVE_MORE_ARTICLES when the corresponding request is performed', () => {
    const articles = [
      {
        article1: '',
      },
      {
        article2: '',
      },
    ];

    jest.spyOn(Api.newsApi, 'getArticles').mockImplementation(() => Promise.resolve(articles));

    const expectedActions = [
      {
        type: types.REQUEST_ARTICLES,
      },
      {
        articles,
        type: types.RECEIVE_MORE_ARTICLES,
      },
    ];

    const store = mockStore();

    return operations.fetchMoreArticles(store.dispatch, -1, '')
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
