// watch out for eventual setSources error: since it is necessary for our application
// to function, we could even reference a static list (or render everything as a Skeleton)
// and display an error message, like "refresh the page", "wait longer", etc

import React, { useState, useLayoutEffect, useEffect } from 'react';

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

// Are we being repainted with every article addition?
// We need to verify how each update affects our rendering
function HomeComponent(props) {
  const {
    // mapped state
    sources,
    articles,
    // currSource,
    newsApiLoading,
    newsApiError,

    // mapped dispatch
    fetchArticles,
    fetchMoreArticles,
    fetchSources,
    // setSource,
  } = props;

  const [currPage, setCurrPage] = useState(1);
  const [currSource, setCurrSource] = useState(null);

  useLayoutEffect(() => {
    if (!sources.length) {
      fetchSources();
    }
  }, []);

  useEffect(() => {
    if (currSource) {
      fetchArticles(currPage, currSource);
    } else if (sources.length) { // This is mostly concerned with the first rendering
      setCurrSource(sources[0].id);
      fetchArticles(currPage, sources[0].id);
    }
  }, [currSource, sources])

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

export default HomeComponent;
