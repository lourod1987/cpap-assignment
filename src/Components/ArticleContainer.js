import React, { Component } from 'react';
import update from 'immutability-helper';
import ArticleListPage from './ArticleListPage';
import UserInfoPage from './UserInfoPage';
import ArticlePage from './ArticlePage';
import { Route } from 'react-router-dom';

export default class ArticleContainer extends Component {

  state = {
    articles: [],
    article: {},
    visited: [],
    z: -1
  }

  componentDidMount() {
    const apiKey = '2d2509aeb33d472da6f8f1cc4c4aa211';
    // const spareUrl = `https://newsapi.org/v2/top-headlines?sources=engadget`

    fetch(`https://newsapi.org/v2/everything?sources=engadget&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        articles: data.articles
      })
      // console.log(this.state.articles)
    });

    // setTimeout(()=>this.goToArticle(this.state.i), 300);
  }

  goToArticle = (index) => {
    let article = Object.assign({}, this.state.articles[index])
    this.setState({
      article 
    });
    // console.log("index val: " + index)
    // setTimeout(() => console.log(this.state.article), 800)
    this.forceUpdate();
    this.visitedArticles(index);
  }

  visitedArticles = (index) => {
    // for (let i = 0; i < this.state.visited.length; i++) {
    //   if(this.state.visited[i].viewed === this.state.article.title) {
    //     return console.log('entry already exists')
    //   }
    // }
    this.setState( prevState => ({
      visited: [...prevState.visited, {
        viewed: this.state.articles[index].title,
        seen: 'True',
        fullArticle: 'False'
      }],
    }))
    setTimeout(() => console.log(this.state.visited), 800)
    this.increment()
  }

  increment = () => {
    this.setState({
      z: this.state.z + 1
    })
  }

  setFullArticle = () => {
    const { z } = this.state;
  //   this.setState({
  //     visited: update(visited, {0: {fullArticle: {$set: 'True'}}})
  //   });
  //   setTimeout(() => console.log(this.state.visited), 800)
    let visited = [...this.state.visited];
    // let visit = {...visited[z]};
    // visit.fullArticle = 'True';
    let visit = {
      ...visited[z],
      fullArticle: 'True'
    }
    visited[z] = visit;
    this.setState({
      visited
    });
    setTimeout(() => console.log(this.state.z), 800)
    setTimeout(() => console.log(this.state.visited), 800)
  }

  render() {
    const { article, articles, visited } = this.state;
    return (
      <div>
        <Route exact path="/" render={ () => (
          <ArticleListPage
            articles={articles}
            goToArticle={this.goToArticle}
          />
        )}/>
          <Route exact path="/article" render={ () => (
            <ArticlePage 
              article={article} 
              visited={visited} 
              setFullArticle={this.setFullArticle}
            />
          )}/>
        <Route exact path="/userinfo" render={ () => (
          <UserInfoPage
            visited={visited}
            articles={articles}
          />
        )}/>
      </div>
    );
  }
}
