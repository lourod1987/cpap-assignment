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

export const getTopStories = () => dispatch => {
  const apiKey = '2d2509aeb33d472da6f8f1cc4c4aa211';
  const topStoriesUrl = `https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=`;

  fetch(`${topStoriesUrl}${apiKey}`)
    .then(response => response.json())
    .then(topStories => {
      dispatch({
        type: C.FETCH_TOPSTORIES,
        payload: topStories.articles
      })
    })
    .catch( err => {
      dispatch(
        addError(err.message)
      )
    })
}
