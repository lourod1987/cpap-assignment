import C from '../constants';
import { combineReducers } from 'redux';

export const article = (state={}, action) =>
  (action.type === C.SET_ARTICLE_TO_DISPLAY) ?
    action.payload :
    state;

export const errors = (state=[], action) => {
  switch(action.type) {
    case C.ADD_ERROR:
      return [...state, action.payload];
    case C.CLEAR_ERROR:
      return state.filter( (err, index) => index !== action.payload);
    default:
      return state;
  }
}

export default combineReducers({
  article,
  errors
})