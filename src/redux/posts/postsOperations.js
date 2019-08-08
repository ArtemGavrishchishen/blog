import axios from 'axios';

import actions from './postsActions';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

const getPosts = () => dispatch => {
  dispatch(actions.fetchPostsRequest());

  axios
    .get('/posts')
    .then(({ data }) => {
      dispatch(actions.fetchPostsSuccess(data));
    })
    .catch(error => dispatch(actions.fetchPostsError(error)));
};

export default {
  getPosts,
};
