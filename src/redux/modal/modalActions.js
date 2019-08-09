import types from './modalActionTypes';

const openModal = () => ({
  type: types.OPEN_MODAL,
});

const closeModal = () => ({
  type: types.CLOSE_MODAL,
});

export default { openModal, closeModal };
