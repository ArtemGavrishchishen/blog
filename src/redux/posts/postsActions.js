import types from './postsActionTypes';

const fetchPostsRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchPostsSuccess = posts => ({
  type: types.FETCH_SUCCESS,
  payload: posts,
});

const fetchPostsError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

const addPostRequest = () => ({
  type: types.ADD_REQUEST,
});

const addPostSuccess = post => ({
  type: types.ADD_SUCCESS,
  payload: post,
});

const addPostError = error => ({
  type: types.ADD_ERROR,
  payload: error,
});

const deletePostRequest = () => ({
  type: types.DELETE_REQUEST,
});

const deletePostSuccess = id => ({
  type: types.DELETE_SUCCESS,
  payload: id,
});

const deletePostError = error => ({
  type: types.DELETE_ERROR,
  payload: error,
});

const updatePostRequest = () => ({
  type: types.UPDATE_REQUEST,
});

const updatePostSuccess = post => ({
  type: types.UPDATE_SUCCESS,
  payload: post,
});

const updatePostError = error => ({
  type: types.UPDATE_ERROR,
  payload: error,
});

export default {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  addPostRequest,
  addPostSuccess,
  addPostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
  updatePostRequest,
  updatePostSuccess,
  updatePostError,
};
