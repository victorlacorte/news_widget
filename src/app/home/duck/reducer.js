import types from './types';

const INITIAL_STATE = {
  sources: [],
  articles: [],
  loading: false,
  error: false,
};

function newsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_ARTICLES: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.RECEIVE_ARTICLES: {
      return {
        ...state,
        articles: action.articles,
        loading: false,
        error: false,
      };
    }

    case types.RECEIVE_MORE_ARTICLES: {
      return {
        ...state,
        articles: state.articles.concat(action.articles),
        loading: false,
        error: false,
      };
    }

    case types.REQUEST_SOURCES: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.RECEIVE_SOURCES: {
      return {
        ...state,
        sources: action.sources,
        loading: false,
        error: false,
      };
    }

    case types.SET_API_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: return state;
  }
}

export default newsReducer;
export { INITIAL_STATE };
