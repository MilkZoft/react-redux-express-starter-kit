// Dependencies
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Bluebird
import './lib/bluebird';

// Redux
import configureStore from '../configureStore';

// Reducers
import rootReducer from '../reducers/app/home';

// Containers
import Home from '../containers/Home';
import Page404 from '../containers/Page404';

// Configuring redux store
const store = configureStore({
  initialState: window.initialState
}, rootReducer);

// App container (div.id)
const app = document.querySelector('#app');

// Rendering the app
render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
    </Router>
  </Provider>,
  app
);

