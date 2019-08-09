import axios from 'axios';

import actions from './commentsActions';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const addComment = comment => dispatch => {
  dispatch(actions.addCommentRequest());
  const newComment = { ...comment, date: new Date() };
  axios
    .post('/comments', newComment)
    .then(({ data }) => {
      dispatch(actions.addCommentSuccess(data));
    })
    .catch(error => dispatch(actions.addCommentError(error)));
};

export default {
  addComment,
};
