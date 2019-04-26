import C from './constants';

export const setArticle = (title, source="Engadget", author, description, content, img, url) => {
  return {
    type: C.SET_ARTICLE,
    payload: {
        title, 
        source,
        author,
        description,
        content,
        img,
        url
      }
  }
}

export const addError = message => 
({
  type: C.ADD_ERROR,
  payload: message
});

export const clearError = index => 
({
  type: C.CLEAR_ERROR,
  payload: index
});