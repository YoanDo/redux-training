// A reducer takes in two things:

// 1 - The action (infos about what's happening)
// 2 - A copy of the current state

function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      //return updated state
      const i = action.index;
      return [
        ...state.slice(0, i), //before the updated post
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1), //after the updated post
      ];
    default:
      return state;
  }
}

export default posts;
