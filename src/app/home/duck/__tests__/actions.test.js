import actions from '../actions';
import types from '../types';

describe('Home actions', () => {
  it('should create an action to receive an article', () => {
    const article = {
      foo: 'bar',
    };

    const expectedAction = {
      articles: article,
      type: types.RECEIVE_ARTICLES,
    };

    expect(actions.receiveArticles(article)).toEqual(expectedAction);
  });
});
