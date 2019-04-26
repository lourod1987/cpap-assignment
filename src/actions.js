import C from './constants';

export function setArticle(title, source="Engadget", author, description, content, img, url) {
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