import { connect } from 'react-redux';

import HomeComponent from './HomeComponent';
import { newsOperations } from './duck';

function mapStateToProps(state) {
  const {
    sources,
    articles,
    // currSource,
    // currPage,
    loading: newsApiLoading,
    error: newsApiError,
  } = state.news;

  return {
    sources,
    articles,
    // currSource,
    // currPage,
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

  // function setSource(source) {
  //   newsOperations.setSource(dispatch, source);
  // }

  // function setPage(page) {
  //   newsOperations.setPage(dispatch, page);
  // }

  return {
    fetchArticles,
    fetchMoreArticles,
    fetchSources,
    // setSource,
    // setPage,
  };
}

// function mergeProps(stateProps, dispatchProps) {
//   function fetchArticles(source) {
//     dispatchProps.setPage(1);
//     dispatchProps.fetchArticles(1, source);
//   }

//   function fetchMoreArticles(source) {
//     const { currPage } = stateProps.curPage;

//     dispatchProps.setPage(currPage + 1);
//     dispatchProps.fetchMoreArticles(currPage + 1, source);
//   }

//   return {
//     ...stateProps,
//     ...dispatchProps,
//     fetchArticles,
//     fetchMoreArticles,
//   };
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // mergeProps,
)(HomeComponent);
