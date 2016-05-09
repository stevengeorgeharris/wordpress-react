import React, {Component} from 'react';

/**
 * Notes:
 * WP-REST API returns html inside string - by default React doesn't like this.
 * Research error handling in React. 
 *
 */

const PostItem = (props) => {
  const postSingle = props.post;
  let image,
      postTitle = postSingle.title.rendered,
      postURL = postSingle.link,
      postContent;

  // error handling?
  if (postSingle.content !== null) {
    postContent = postSingle.content.rendered;
  }
  if (postSingle.better_featured_image !== null) {
     image = postSingle.better_featured_image.source_url;
  }
  return (
    <div className="post__single">
      <a href={postURL}>{postTitle}</a>
      <img src={image} />
      <div className="post__single-text" dangerouslySetInnerHTML={{__html: postContent}}></div>
    </div>
  );
};

export default PostItem;
