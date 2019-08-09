import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as API from '../../services/api';
import { modalSelectors, modalActions } from '../../redux/modal';

import PostView from './PostView';
import CommentsView from './CommentsView';
import PostEditorContainer from '../PostEditor/PostEditorContainer';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

const INIT_POST = {
  title: '',
  body: '',
  comments: [],
  creator: '',
  date: '',
  comment: '',
};

class PostContainer extends Component {
  state = { ...INIT_POST };

  componentDidMount() {
    this.fetchPostById();
  }

  fetchPostById = () => {
    const {
      match: { params },
    } = this.props;

    if (params.id) {
      API.getPostById(params.id).then(data => this.setState({ ...data }));
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const {
      match: { params },
    } = this.props;

    const { comment } = this.state;

    if (params.id) {
      API.addCommentPostById(params.id, comment);
    }

    this.fetchPostById();
  };

  handleGoBack = () => {
    const {
      location: { state },
      history,
    } = this.props;

    if (state) {
      return history.push(state.from);
    }

    return history.push({
      pathname: '/',
    });
  };

  render() {
    const { comments, ...postInfo } = this.state;
    const { modalIsOpen, closeModal, openModal } = this.props;
    return (
      <div>
        <PostView {...postInfo} goBack={this.handleGoBack} />
        <Button onClick={openModal}>Edit post</Button>

        <CommentsView
          comments={comments}
          {...this.state}
          submit={this.handleSubmitForm}
          change={this.handleChange}
        />
        {modalIsOpen && (
          <Modal onClose={closeModal}>
            <PostEditorContainer
              onClose={closeModal}
              fetch={this.fetchPostById}
            />
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalIsOpen: modalSelectors.modalIsOpen(state),
});

const mapDispatchToProps = {
  openModal: modalActions.openModal,
  closeModal: modalActions.closeModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PostContainer));
