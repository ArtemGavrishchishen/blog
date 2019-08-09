import types from './modalActionTypes';

function modalReducer(state = false, { type }) {
  switch (type) {
    case types.OPEN_MODAL:
      return true;
    case types.CLOSE_MODAL:
      return false;

    default:
      return state;
  }
}

export default modalReducer;
