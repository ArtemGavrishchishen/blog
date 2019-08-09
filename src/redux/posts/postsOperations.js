import axios from 'axios';

import actions from './postsActions';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const getPosts = () => dispatch => {
  dispatch(actions.fetchPostsRequest());

  axios
    .get('/posts')
    .then(({ data }) => {
      dispatch(actions.fetchPostsSuccess(data.reverse()));
    })
    .catch(error => dispatch(actions.fetchPostsError(error)));
};

const addPost = post => dispatch => {
  dispatch(actions.addPostRequest());
  const newPost = { ...post, date: new Date() };
  axios
    .post('/posts', newPost)
    .then(({ data }) => {
      dispatch(actions.addPostSuccess(data));
    })
    .catch(error => dispatch(actions.addPostError(error)));
};

const updatePost = post => dispatch => {
  dispatch(actions.updatePostRequest());
  const { id, ...newPost } = post;
  axios
    .put(`/posts/${id}`, newPost)
    .then(({ data }) => {
      dispatch(actions.updatePostSuccess(data));
    })
    .catch(error => dispatch(actions.updatePostError(error)));
};

const deletePost = id => dispatch => {
  dispatch(actions.deletePostRequest());

  axios
    .delete(`/posts/${id}`)
    .then(({ data }) => {
      dispatch(actions.deletePostSuccess(data));
    })
    .catch(error => dispatch(actions.deletePostError(error)));
};

export default {
  getPosts,
  addPost,
  updatePost,
  deletePost,
};
