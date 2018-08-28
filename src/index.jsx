import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route, Switch,
  Redirect
} from 'react-router-dom';
import { createHistory as history } from 'history';
import InputComp from './InputComp';
import reducer from './reducer';

// import '../assets/stylesheets/application.scss';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/redirect" render={() => <Redirect from="/redirect" to="/" />} />
        <Route path="/input" component={InputComp} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
