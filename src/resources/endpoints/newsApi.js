import Api from '../base';

import { parseArticle, parseSource } from './utils';

function getArticles(pageSize, page, sources) {
  return Api.get('everything', {
    params: {
      pageSize,
      page,
      sources,
    },
  })
    .then((resp) => resp.data.map((article) => parseArticle(article)));
}

function getSources() {
  return Api.get('sources')
    .then((resp) => resp.data.map((source) => parseSource(source)));
}

export default {
  getArticles,
  getSources,
};
