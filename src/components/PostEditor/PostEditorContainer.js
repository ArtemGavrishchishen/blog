import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import getPostById from '../../services/api';
import { postsOperations } from '../../redux/posts';

import PostEditorView from './PostEditorView';

const INIT_POST = {
  id: '',
  title: '',
  body: '',
  comments: [],
  creator: '',
  date: '',
};

class PostEditorContainer extends Component {
  state = { ...INIT_POST };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    if (params.id) {
      getPostById(params.id).then(data => this.setState({ ...data }));
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { id } = this.state;
    const { addPost, updatePost } = this.props;

    if (id) {
      updatePost(this.state);
    } else {
      addPost(this.state);
    }
    this.reset();
  };

  handleDelete = e => {
    e.preventDefault();
    console.log('Deleted');
  };

  reset = () => {
    const { onClose } = this.props;
    this.setState({ ...INIT_POST });
    onClose();
  };

  render() {
    return (
      <div>
        <PostEditorView
          {...this.state}
          submit={this.handleSubmitForm}
          change={this.handleChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addPost: postsOperations.addPost,
  updatePost: postsOperations.updatePost,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(PostEditorContainer));
