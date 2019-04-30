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
  const topStoriesUrl = `https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=`;

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

    
  fetch(`https://newsapi.org/v2/everything?sources=engadget&apiKey=${apiKey}`)
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

export const genTable = (topStories, articles) => {
  // console.log("in gen Table")
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
  console.log('action articleIndex: ', index)
  return {
    type: C.SET_ARTICLE_INDEX,
    payload: index
  };
}

export const seenTechAggArticle = (table, index) => {
  // console.log('seenTechAgg Index: ', index)
  // articleIndex(index);
  // seenFullArticle(table, index);
  let articleTable = [...table];
  let seen = {
    ...articleTable[index],
    seen: 'True',
    // fullArticle: 'True'
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

// export const goToArticle = (index, type, title, topStories, articles, searchList) => {
//   switch (type) {
//     case "headline":
//      setArticle(topStories[index]);
//       break;
//     case "main":
//       setArticle(articles[index]);
//       index += 5;
//       break;
//     case "search":
//       for (let i = 0; i < searchList.length; i++){
//         if (searchList[i].title === title) {
//           index = i;
//           setArticle(searchList[index]);
//           break;
//         }
//       }
//       break;
//     default:
//       addError("An error has occurred. Reached a case that should never happen");
//   }

//   let visited = [...this.state.visited];
//     let visit = {
//       ...visited[index],
//       seen: 'True'
//     }
//     visited[index] = visit;
    
//     this.setState({
//       article: this.props.setArticle,
//       visited,
//       i: index
//     });
// }

