import Api from 'api';

import creators from './actions';

const {
  receiveArticles,
  receiveMoreArticles,
  receiveSources,
  requestArticles,
  requestSources,
  setApiError,
} = creators;

function fetchArticlesFactory(successDispatch) {
  function doFetch(dispatch, page, source) {
    dispatch(requestArticles());

    return Api.newsApi.getArticles(page, source)
      .then((resp) => {
        dispatch(successDispatch(resp));
      })
      .catch(() => {
        dispatch(setApiError());
      });
  }

  return doFetch;
}


function fetchArticles(dispatch, page, source) {
  return fetchArticlesFactory(receiveArticles)(dispatch, page, source);
}

function fetchMoreArticles(dispatch, page, source) {
  return fetchArticlesFactory(receiveMoreArticles)(dispatch, page, source);
}

function fetchSources(dispatch) {
  dispatch(requestSources());

  return Api.newsApi.getSources()
    .then((resp) => {
      dispatch(receiveSources(resp));
    })
    .catch(() => {
      dispatch(setApiError());
    });
}

export default {
  fetchArticles,
  fetchMoreArticles,
  fetchSources,
};
