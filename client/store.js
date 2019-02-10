import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';
// import the data
import comments from './data/comments';
import posts from './data/posts';

// create a object for the default data
const defaultState = {
  posts,
  comments
  // es6 version of "comments: comments"
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

