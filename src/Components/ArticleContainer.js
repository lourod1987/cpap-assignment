import React, { Component } from 'react';
import ArticleListPage from './ArticleListPage';
import UserInfoPage from './UserInfoPage';
import ArticlePage from './ArticlePage';
import { Route } from 'react-router-dom';

export default class ArticleContainer extends Component {

  state = {
    article: {},
    articles: [],
    i: 0,
    visited: [],
    viewedFull: []
  }

  componentDidMount() {
    const apiKey = '2d2509aeb33d472da6f8f1cc4c4aa211';
    // const spareUrl = `https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}`

    fetch(`https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=${apiKey}`)
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
    this.setIndex(index);

    let article = Object.assign({}, this.state.articles[index])
    this.setState({
      article 
    });
    // console.log("index val: " + index)
    // setTimeout(() => console.log(this.state.article), 800)
    this.visitedArticles(index);
  }

  setIndex = (index) => {
    this.setState({
      i: index
    });
    // setTimeout(() => console.log("i state val: " + this.state.i), 800)
  }

  visitedArticles = (index) => {
    this.setState( prevState => ({
      visited: [...prevState.visited, {
        viewed: this.state.articles[index].title,
      }]
    }))
    // console.log(this.state.visited)
  }

  fullArticle = (title) => {
    this.setState( prevState => ({
      viewedFull: [...prevState.viewedFull, {
        fullArticle: title,
      }]
    }));
  }

  render() {
    const { article, articles, visited, viewedFull } = this.state;
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
              fullArticle={this.fullArticle} 
            />
          )}/>
        <Route exact path="/userinfo" render={ () => (
          <UserInfoPage
            visited={visited}
            viewedFull={viewedFull}
          />
        )}/>
      </div>
    );
  }
}
