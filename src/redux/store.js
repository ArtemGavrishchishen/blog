import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { postsReducer } from './posts';
import { modalReducer } from './modal';

const rootReducer = combineReducers({
  posts: postsReducer,
  modalIsOpen: modalReducer,
});

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
