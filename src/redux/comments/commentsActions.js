import types from './commentsActionTypes';

const addCommentRequest = () => ({
  type: types.ADD_REQUEST,
});

const addCommentSuccess = comment => ({
  type: types.ADD_SUCCESS,
  payload: comment,
});

const addCommentError = error => ({
  type: types.ADD_ERROR,
  payload: error,
});

export default {
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
};
