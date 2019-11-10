import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './home';

function App() {
  useEffect(() => {
    // Remove app-load div from index.html
    const appLoad = document.getElementById('app-load');

    if (appLoad) {
      appLoad.remove();
    }
  }, []);

  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
