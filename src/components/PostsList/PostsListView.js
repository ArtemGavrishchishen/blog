import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin: 0 auto;
`;

const Item = styled.ul`
  display: grid;
  border-radius: 4px;
  min-height: 30px;
  background: #fff 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  padding: 10px;
  border: 0;
  color: #3c484e;
  transition: all 0.4s ease;
  &:hover {
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`;

const Title = styled.h2`
  margin: 1.5em 0 0.5em;
  font-size: 1rem;
  font-weight: 700;
`;

const Author = styled.h2`
  color: #738a94;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin: 1.5em 0 0.5em;
  line-height: 1.15;
`;

const PostsListView = ({ posts = [], match, location }) => (
  <List>
    {posts.map(post => (
      <Item key={post.id}>
        <Title>{post.title}</Title>
        <Author>{post.creator}</Author>
        <div>{post.date}</div>
        <Text>{post.body.substring(0, 30)} ...</Text>
        <Link
          to={{
            pathname: `${match.url}posts/${post.id}`,
            state: { from: location },
          }}
        >
          Read more...
        </Link>
      </Item>
    ))}
  </List>
);

export default withRouter(PostsListView);
