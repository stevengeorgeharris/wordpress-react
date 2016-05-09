import React, {Component} from 'react';
import PostItem from './post-item';

const PostList = (props) => {
  const posts = props.posts.map((post) => {
    return <PostItem key={post.id} post={post} />;
  });

  return (
    <div className="posts__container">
      {posts}
    </div>
  );
};

export default PostList;
