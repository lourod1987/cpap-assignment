import C from '../constants';
import { combineReducers } from 'redux';

export const topStories = (state=[], action) =>
(action.type === C.FETCH_TOP_STORIES) ?
    action.payload :
    state;

export const articles = (state=[], action) =>
(action.type === C.FETCH_ARTICLES) ?
    action.payload :
    state;

export const setArticle = (state={}, action) =>
  (action.type === C.SET_ARTICLE) ?
  Object.assign({}, action.payload) :
    state;

export const articleIndex = (state=0, action) =>
  (action.type === C.SET_ARTICLE_INDEX) ?
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

export const articlesTable = (state=[], action) => {
  switch(action.type) {
    case C.GEN_TABLE:
      return action.payload;
    case C.SEEN_ENGADGET_ARTICLE:
      return action.payload;
    case C.SEEN_TECHAGG_ARTICLE:
      return action.payload;
    default:
      return state;
  }
}

export const searchList = (state=[], action) => {
  switch(action.type) {
    case C.GEN_SEARCH_LIST:
      return action.payload
    default:
      return state;
  }
}

export default combineReducers({
  topStories,
  articlesTable,
  searchList,
  articles,
  setArticle,
  articleIndex,
  errors
});