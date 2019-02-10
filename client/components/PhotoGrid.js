import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {/*<pre>{JSON.stringify(this.props.posts, null, ' ')}</pre>*/}
        {this.props.posts.map((post, index) => (
          <Photo key={index} index={index} post={post} {...this.props} />
        ))}
      </div>
    );
  }
});

export default PhotoGrid;
