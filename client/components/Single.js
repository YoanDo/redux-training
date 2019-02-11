import React from 'react';
import { Link } from 'react-router';
import Photo from './photo';
import Comments from './comments';

const Single = React.createClass({
  render() {
    // index of the post
    // here I'm looking for the post that has as an id the url of the page single page > this.props.params.postId
    // get the post
    const i = this.props.posts.findIndex(
      post => post.code === this.props.params.postId
    );
    const post = this.props.posts[i];
    return (
      <div className="single-photo">
        <Photo index={i} post={post} {...this.props} />;
        <Comments />
      </div>
    );
  }
});

export default Single;
