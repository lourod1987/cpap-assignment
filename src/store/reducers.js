import C from '../constants';
import { combineReducers } from 'redux';

export const getTopStories = (state=[], action) =>
(action.type === C.FETCH_TOPSTORIES) ?
    action.payload :
    state;

export const setArticle = (state={}, action) =>
  (action.type === C.SET_ARTICLE) ?
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
  getTopStories,
  setArticle,
  errors
});