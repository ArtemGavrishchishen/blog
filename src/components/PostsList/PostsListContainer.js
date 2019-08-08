import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postsSelectors, postsOperations } from '../../redux/posts';

import PostsListView from './PostsListView';

class PostsListContainer extends Component {
  state = {};

  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <PostsListView posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: postsSelectors.getAllPosts(state),
});

const mapDispatchToProps = {
  getPosts: postsOperations.getPosts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsListContainer);
