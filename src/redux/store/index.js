import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const consoleMesssages = store => next => action => {
  let result;

  console.groupCollapsed(`dispatching action => ${action.type}`);

  result = next(action);

  let { topStories, articles, articlesTable, searchList, setArticle, articleIndex, errors } = store.getState();

  console.log(`
    topStories: ${JSON.stringify(topStories)}
    articles: ${JSON.stringify(articles)}
    articlesTable: ${JSON.stringify(articlesTable)}
    searchList: ${JSON.stringify(searchList)}
    article: ${JSON.stringify(setArticle)}
    articleIndex: ${articleIndex}
    errors: ${errors.length}
  `);
  console.groupEnd();

  return result;
}

export default (initialState={}) => {
  return applyMiddleware(thunk, consoleMesssages)(createStore)(appReducer, initialState);
}
