import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/ui/App';
import * as serviceWorker from './serviceWorker';
import storeFactory from './store';
import { setArticle, addError, getTopStories } from './actions';
import { Provider } from 'react-redux';

const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) :
  {};

const saveState = () => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store'] = state;
}

const store = storeFactory(initialState);
store.subscribe(saveState);

// store.dispatch(
//   addError('this is a test error')
// )

// store.dispatch(
//   setArticle("This is a crazy tech story title","Engadget", "Lou Ye", "snazzy clickbait here", "some long paragraph here", "img link here", "full article link here")
// )

store.dispatch(
  getTopStories()
)

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
