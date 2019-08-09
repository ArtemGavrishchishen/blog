import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { postsSelectors, postsOperations } from '../../redux/posts';
import { modalSelectors, modalActions } from '../../redux/modal';

import PostsListView from './PostsListView';
import PostEditorContainer from '../PostEditor/PostEditorContainer';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`;

class PostsListContainer extends Component {
  state = {};

  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts, modalIsOpen, closeModal, openModal } = this.props;
    return (
      <div>
        <Wrapper>
          <Button onClick={openModal}>Add new post</Button>
        </Wrapper>

        {modalIsOpen && (
          <Modal onClose={closeModal}>
            <PostEditorContainer
              onClose={closeModal}
              fetch={this.fetchPostById}
            />
          </Modal>
        )}
        <PostsListView posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: postsSelectors.getAllPosts(state),
  modalIsOpen: modalSelectors.modalIsOpen(state),
});

const mapDispatchToProps = {
  getPosts: postsOperations.getPosts,
  openModal: modalActions.openModal,
  closeModal: modalActions.closeModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsListContainer);
