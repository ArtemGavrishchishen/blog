import types from './commentsActionTypes';

const INIT_COMMENTS = [];

function commentsReducer(state = INIT_COMMENTS, { type, payload }) {
  switch (type) {
    case types.ADD_SUCCESS:
      return [payload, ...state];

    default:
      return state;
  }
}

export default commentsReducer;
