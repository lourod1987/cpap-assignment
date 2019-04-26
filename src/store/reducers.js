import C from '../constants';

export const article = (state={}, action) =>
  (action.type === C.SET_ARTICLE_TO_DISPLAY) ?
    action.payload :
    state;

