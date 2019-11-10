import { connect } from 'react-redux';

import HomeComponent from './HomeComponent';
import { newsOperations } from './duck';

function mapStateToProps(state) {
  const {
    sources,
    articles,
    loading: newsApiLoading,
    error: newsApiError,
  } = state.news;

  return {
    sources,
    articles,
    newsApiLoading,
    newsApiError,
  };
}

function mapDispatchToProps(dispatch) {
  function fetchArticles(page, source) {
    newsOperations.fetchArticles(dispatch, page, source);
  }

  function fetchMoreArticles(page, source) {
    newsOperations.fetchMoreArticles(dispatch, page, source);
  }

  function fetchSources() {
    newsOperations.fetchSources(dispatch);
  }

  return {
    fetchArticles,
    fetchMoreArticles,
    fetchSources,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
