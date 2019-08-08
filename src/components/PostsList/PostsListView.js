import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const PostsListView = ({ posts = [], match, location }) => (
  <div>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link
            to={{
              pathname: `${match.url}posts/${post.id}`,
              state: { from: location },
            }}
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default withRouter(PostsListView);
