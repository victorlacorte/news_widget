import React, { useState, useLayoutEffect, useEffect } from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/Loading';
import NewsArticle from 'components/NewsArticle';
import Select from 'components/Select';

import {
  Header,
  LoadingContainer,
  Title,
  StyledButton,
  ApiError,
  NewsApiText,
} from './styles';

function HomeComponent(props) {
  const {
    // mapped state
    sources,
    articles,
    newsApiLoading,
    newsApiError,

    // mapped dispatch
    fetchArticles,
    fetchMoreArticles,
    fetchSources,
  } = props;

  const [currPage, setCurrPage] = useState(1);
  const [currSource, setCurrSource] = useState(null);

  useLayoutEffect(() => {
    if (!sources.length) {
      fetchSources();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currSource) {
      fetchArticles(currPage, currSource);
    } else if (sources.length) { // This is mostly concerned with the first rendering
      setCurrSource(sources[0].id);
      fetchArticles(currPage, sources[0].id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currSource, sources]);

  if (!articles.length) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );
  }

  return (
    <>
      <Header>
        <Title>Notícias</Title>

        <Select
          onChange={(event) => {
            // reset page and source
            setCurrPage(1);
            setCurrSource(event.target.value); // source.id
          }}
        >
          {sources.map((source) => (
            <option key={source.id} value={source.id}>
              {source.name}
            </option>
          ))}
        </Select>
      </Header>

      {articles.map((article) => (
        <NewsArticle
          key={article.url}
          title={article.title}
          url={article.url}
          publishedAt={article.publishedAt}
          sourceName={article.sourceName}
        />
      ))}


      {newsApiLoading
        ? <Loading />
        : (
          <StyledButton
            type="button"
            onClick={() => {
              fetchMoreArticles(currPage + 1, currSource);
              setCurrPage((val) => val + 1);
            }}
          >
            Mostrar mais
          </StyledButton>
        )}

      {newsApiError
        ? <ApiError>newsapi.org indisponível</ApiError>
        : <NewsApiText>Powered by newsapi.org</NewsApiText>}
    </>
  );
}

HomeComponent.propTypes = {
  sources: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,

  articles: PropTypes.arrayOf(PropTypes.shape({
    sourceName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
  })).isRequired,

  newsApiLoading: PropTypes.bool.isRequired,

  newsApiError: PropTypes.bool.isRequired,

  fetchArticles: PropTypes.func.isRequired,

  fetchMoreArticles: PropTypes.func.isRequired,

  fetchSources: PropTypes.func.isRequired,
};

export default HomeComponent;
