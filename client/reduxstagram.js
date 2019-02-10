import React from 'react';
import { render } from 'react-dom';
// css
import css from './styles/style.styl';
// import component
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
// Our main component brings to the photogrid elements as it's the one we want to display by default
const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

// instead of rendering <Main/> like in a single page app we render the router above
render(router, document.getElementById('root'));
