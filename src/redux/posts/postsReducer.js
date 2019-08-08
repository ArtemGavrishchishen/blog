import types from './postsActionTypes';

const INIT_POSTS = [];

function postsReducer(state = INIT_POSTS, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.FETCH_REQUEST:
    case types.FETCH_ERROR:
      return INIT_POSTS;

    case types.ADD_SUCCESS:
      return [...state, payload];

    case types.DELETE_SUCCESS:
      return state.filter(post => post.id !== payload);

    case types.UPDATE_SUCCESS:
      return state.map(post => (post.id === payload.id ? payload : post));

    default:
      return state;
  }
}

export default postsReducer;
