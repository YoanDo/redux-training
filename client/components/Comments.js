import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
        </p>
        <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
      </div>
    );
  },
  handleSubmit(e) {
    // e.preventDefault() on a submit function prevent the page reloading
    e.preventDefault();
    const { postId } = this.props.params;
    const { addComment } = this.props;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    addComment(postId, author, comment);
    //cleans the new input
    this.refs.commentForm.reset()
  },
  render() {
    const { postComments } = this.props;
    return (
      <div className="comments">
        {postComments.map(this.renderComment)}
        <form
          onSubmit={this.handleSubmit}
          ref="commentForm"
          className="comment-form"
        >
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
