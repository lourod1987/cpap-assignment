import C from '../constants';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const consoleMesssages = store => next => action => {
  let result;

  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log('article: ', store.getState().setArticle);

  result = next(action);

  let { setArticle, errors } = store.getState();

  console.log(`
    article: ${JSON.stringify(setArticle)}
    errors: ${errors.length}
  `);
  console.groupEnd();

  return result;
}

export default (initialState={}) => {
  return applyMiddleware(thunk, consoleMesssages)(createStore)(appReducer, initialState);
}
