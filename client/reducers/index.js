import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';

// router: routerReducer --> to keep track of the page change
const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;
