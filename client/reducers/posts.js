// A reducer takes in two things:

// 1 - The action (infos about what's happening)
// 2 - A copy of the current state

function posts(state = [], action) {
  console.log('post will change ya  ✅');
  console.log(state, action);
  return state;
}

export default posts;
