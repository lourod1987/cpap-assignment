import React, { Component } from 'react';
import ArticleListPage from './Components/ArticleListPage';
import UserInfoPage from './Components/UserInfoPage';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={ () => (
          <ArticleListPage />
        )}/>
        <Route exact path="/userinfo" render={ () => (
          <UserInfoPage />
        )}/>
      </div>
       /* <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
         <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           <a
             className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
           >
             Learn React
           </a>
         </header>
       </div> */
    );
  }
}

export default App;
