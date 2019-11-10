import types from './types';

function requestArticles() {
  return {
    type: types.REQUEST_ARTICLES,
  };
}

function receiveArticles(articles) {
  return {
    type: types.RECEIVE_ARTICLES,
    articles,
  };
}

function receiveMoreArticles(articles) {
  return {
    type: types.RECEIVE_MORE_ARTICLES,
    articles,
  };
}

function requestSources() {
  return {
    type: types.REQUEST_SOURCES,
  };
}

function receiveSources(sources) {
  return {
    type: types.RECEIVE_SOURCES,
    sources,
  };
}

function setApiError() {
  return {
    type: types.SET_API_ERROR,
  };
}

export default {
  requestArticles,
  receiveArticles,
  receiveMoreArticles,
  requestSources,
  receiveSources,
  setApiError,
}
