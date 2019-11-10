import React from 'react';
import PropTypes from 'prop-types';

import date from 'commons/utils/date';

import {
  Root,
  LinkTitle,
  Container,
  PublishedAt,
  SourceName,
} from './styles';

function NewsArticle(props) {
  const {
    title,
    url,
    publishedAt,
    sourceName,
    ...otherProps
  } = props;

  return (
    <Root {...otherProps}>
      <LinkTitle
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </LinkTitle>

      <Container>
        <PublishedAt>{date.convertIsoToBrLocale(publishedAt)}</PublishedAt>
        <SourceName>{sourceName}</SourceName>
      </Container>
    </Root>
  );
}

NewsArticle.defaultProps = {
  sourceName: 'N/A',
};

NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,

  url: PropTypes.string.isRequired,

  publishedAt: PropTypes.string.isRequired,

  sourceName: PropTypes.string,
};

export default NewsArticle;
