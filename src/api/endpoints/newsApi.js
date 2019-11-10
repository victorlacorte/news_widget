import Api from '../base';

import { parseArticle, parseSource } from './utils';

function getArticles(page, sources) {
  return Api.get('everything', {
    params: {
      pageSize: 5, // 5 articles per request
      page,
      sources,
    },
  })
    .then((resp) => resp.data.articles.map((article) => parseArticle(article)));
}

function getSources() {
  return Api.get('sources')
    .then((resp) => resp.data.sources.map((source) => parseSource(source)));
}

export default {
  getArticles,
  getSources,
};
