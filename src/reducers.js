import { combineReducers } from 'redux';

import newsReducer from 'app/home/duck';

export default combineReducers({
  news: newsReducer,
});
