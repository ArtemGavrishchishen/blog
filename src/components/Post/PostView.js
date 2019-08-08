import React from 'react';

const PostView = ({
  title = '',
  body = '',
  comments = [],
  creator = '',
  date = '',
  goBack,
}) => (
  <div>
    <button onClick={goBack} type="button">
      goBack
    </button>
    <div>{title}</div>
    <div>{body}</div>
    <div>{creator}</div>
    <div>{date}</div>
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  </div>
);

export default PostView;
