import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

const OnBoarding = React.lazy(() => import('./components/OnBoarding'));

function App(props) {
  return (
    <BrowserRouter>
      <React.Suspense fallback={'Loading...'}>
        <Switch>
          <Route
            exact
            path='/'
            name='onBoarding App'
            render={(props) => <OnBoarding {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
