function parseArticle(article) {
  return {
    sourceName: article.source.name,
    title: article.title,
    url: article.url,
    urlToImage: article.urlToImage,
    publishedAt: article.publishedAt,
  };
}

function parseSource(source) {
  return {
    id: source.id,
    name: source.name,
  };
}

export {
  parseArticle,
  parseSource,
};
