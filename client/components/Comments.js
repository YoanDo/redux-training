import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
        </p>
        <button className="remove-comment">&times;</button>
      </div>
    );
  },
  render() {
    const { postComments } = this.props;
    return (
      <div className="comments">
        {postComments.map(this.renderComment)}
        <form action="" ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          {/* input hidden i necessary to let the user hit enter when he is done */}
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
