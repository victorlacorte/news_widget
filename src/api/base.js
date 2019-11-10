import axios from 'axios';

const base = axios.create({
  baseURL: 'https://newsapi.org/v2',

  headers: {
    Accept: 'application/json',
    'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY,
  },
  timeout: 5000,
});

export default base;
