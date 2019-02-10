import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className="grid-photo"
            />
          </Link>
          {/*like animation*/}
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeOut={500}
            transitionLeaveTimeOut={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>

          <figCaption>
            <p>{post.caption}</p>
            <button className="likes">&hearts;{post.likes}</button>
            <Link to={`/view/${post.code}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble" />
                {comments[post.code] ? comments[post.code].length : 0  }
              </span>
            </Link>
          </figCaption>
        </div>
      </figure>
    );
  }
});

export default Photo;
