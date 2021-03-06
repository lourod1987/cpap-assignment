import C from './constants';

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

export const getAllStories = () => dispatch => {
  const apiKey = '2d2509aeb33d472da6f8f1cc4c4aa211';
  const topStoriesUrl = 'https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=';
  const articlesUrl = 'https://newsapi.org/v2/everything?sources=engadget&apiKey=';

  fetch(`${topStoriesUrl}${apiKey}`)
    .then(response => response.json())
    .then(topStories => {
      dispatch({
        type: C.FETCH_TOP_STORIES,
        payload: topStories.articles
      })
    })
    .catch( err => {
      dispatch(
        addError(err.message)
      )
    });

    
  fetch(`${articlesUrl}${apiKey}`)
    .then(res => res.json())
    .then(stories => {
      dispatch({
        type: C.FETCH_ARTICLES,
        payload: stories.articles
      })
    })
    .catch( err => {
        dispatch(
          addError(err.message)
        )
    });
}

export const setResources = (topStories, articles) => dispatch => {
    dispatch(genTable(topStories, articles));
    dispatch(genSearchList(topStories, articles));
}

export const genTable = (topStories, articles) => {
  let ts = topStories.map( ts => {
    return {
      viewed: ts.title,
      seen: 'False',
      fullArticle: 'False' 
    }
  })

  let stories = articles.map( s => {
    return {
      viewed: s.title,
      seen: 'False',
      fullArticle: 'False'
    }
  });

  return {
    type: C.GEN_TABLE,
    payload: [...ts].concat(stories)
  }
}

export const genSearchList = (topStories, articles) => {
  let ts = topStories;
  let fullList = [...ts].concat(articles);

  return {
    type: C.GEN_SEARCH_LIST,
    payload: fullList
  }
}

export const setArticle = article => {
  return {
    type: C.SET_ARTICLE,
    payload: article
  }
}

export const articleIndex = index => {
  return {
    type: C.SET_ARTICLE_INDEX,
    payload: index
  };
}

export const seenTechAggArticle = (table, index) => {
  let articleTable = [...table];
  let seen = {
    ...articleTable[index],
    seen: 'True'
  }
  articleTable[index] = seen;
  return {
    type: C.SEEN_TECHAGG_ARTICLE,
    payload: articleTable
  }
}

export const seenFullArticle = (table, index) => {
  let articleTable = [...table];
  let seen = {
    ...articleTable[index],
    fullArticle: 'True'
  }
  articleTable[index] = seen;
  return {
    type: C.SEEN_ENGADGET_ARTICLE,
    payload: articleTable
  }
}

export const goToArticle = (index, type, title) => (dispatch, getState) => {
  console.log("index from goToArticle: ", type)
  const state = getState();
  switch (type) {
    case "headline":
     dispatch(setArticle(state.topStories[index]));
      break;
    case "main":
      dispatch(setArticle(state.articles[index]));
      index += 5;
      break;
    case "search":
      // searchList.map( (article, i) => {
      //       //   if (article.title === title) {
      //       //     index = i;
      //       //     viewArticle(article);
      //       //   }
      //       // })
      for (let i = 0; i < state.searchList.length; i++){
        if (state.searchList[i].title === title) {
          index = i;
          dispatch(setArticle(state.searchList[index]));
          break;
        }
      }
      break;
    default:
      dispatch(addError("An error has occurred. Reached a case that should never happen"));
  }

  dispatch(articleIndex(index));
  dispatch(seenTechAggArticle(state.articlesTable, index));
}

