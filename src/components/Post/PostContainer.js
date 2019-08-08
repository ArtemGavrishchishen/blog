import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import getPostById from '../../services/api';

import PostView from './PostView';

const INIT_POST = {
  title: '',
  body: '',
  comments: [],
  creator: '',
  date: '',
};

class PostContainer extends Component {
  state = { ...INIT_POST };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    getPostById(params.id).then(data => this.setState({ ...data }));
  }

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
    return (
      <div>
        <PostView {...this.state} goBack={this.handleGoBack} />
      </div>
    );
  }
}

export default withRouter(PostContainer);
