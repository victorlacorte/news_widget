import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';

import App from 'app';

import Main from 'components/Main';
import theme from 'commons/styles/theme';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware()),
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Main>
        <App />
      </Main>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
