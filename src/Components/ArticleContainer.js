import React, { Component } from 'react';
// import update from 'immutability-helper';
import ArticleListPage from './ArticleListPage';
import UserInfoPage from './UserInfoPage';
import ArticlePage from './ArticlePage';
import { Route } from 'react-router-dom';

export default class ArticleContainer extends Component {

  state = {
    articles: [],
    article: {},
    visited: [],
    i: -1
  }

  componentDidMount() {
    const apiKey = '2d2509aeb33d472da6f8f1cc4c4aa211';
    // const spareUrl = `https://newsapi.org/v2/top-headlines?sources=engadget`

    fetch(`https://newsapi.org/v2/everything?sources=engadget&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        articles: data.articles,
      })
    .catch( error => console.log(error.message))
    });

    // this.setState( prevState => ({
    //   visited: [{
    //     viewed: data.articles[0].title,
    //     seen: 'False',
    //     fullArticle: 'False'
    //   }],
    // }))
  }

  goToArticle = (index) => {
    let article = Object.assign({}, this.state.articles[index])
    this.setState({
      article 
    });
    this.forceUpdate();
    this.visitedArticles(index);
  }

  visitedArticles = (index) => {
    this.setState( prevState => ({
      visited: this.state.articles.map( a => {
      [...prevState.viewed,
        {
        viewed: a.title,
        seen: 'False',
        fullArticle: 'False' 
      }]
      })
    }))
    setTimeout(() => console.log(this.state.visited), 800)
    this.increment();
  }

  increment = () => {
    this.setState({
      i: this.state.i + 1
    })
  }

  setFullArticle = () => {
    const { i } = this.state;
  //   this.setState({
  //     visited: update(visited, {0: {fullArticle: {$set: 'True'}}})
  //   });
    let visited = [...this.state.visited];
    // let visit = {...visited[i]};
    // visit.fullArticle = 'True';
    let visit = {
      ...visited[i],
      fullArticle: 'True'
    }
    visited[i] = visit;
    this.setState({
      visited
    });
    setTimeout(() => console.log(this.state.i), 800)
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
