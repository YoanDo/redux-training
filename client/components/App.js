import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// Takes state and dispatch and surface those data in our components.
// Here in main which was just before a amount of div we will find our actions for exemple
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
