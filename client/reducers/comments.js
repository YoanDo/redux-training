function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return the state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
    console.log('removing a comment', action.index)
      // return the state without the deleted comment
      return [
        ...state.slice(0, action.index),
        //aftre the deleted one to the end
        ...state.slice(action.index, action.index + 1)
      ];
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
