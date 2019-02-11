// increment likes
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

// add comment
export function addComment(postId, author, comment) {
  console.log('dispatch add comment', postId, author, comment)
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comment (we need here the id of the post and the id of the comment to remove)
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index,
  };
}
