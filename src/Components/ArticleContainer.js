import React, { Component } from 'react';
import ArticleListPage from './ArticleListPage';
import UserInfoPage from './UserInfoPage';
import ArticlePage from './ArticlePage';
import { Route } from 'react-router-dom';

class ArticleContainer extends Component {
  state = {
    article: {},
    articles: [],
    visited: []
    // url: '/'
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
          console.log(this.state.articles)
      })
  }
  // generateUrl = (publisher, author, timestamp) => {
  //   const tempArr = author.split(' ');
  //   const newStr = tempArr.join('');
  //   // const combine = `/@${publisher}/${newStr}/${timestamp}`;
  //   const combine = "/@" + publisher + "/" + newStr + "/" + timestamp;
  //   console.log("combine val: " + combine)
  //   this.setState({
  //     url: combine
  //   })
  //   console.log("curr state: " + this.state.url)
  // }
  goToArticle = (index) => {
    this.setState( prevState => ({
      article: Object.assign(prevState.article, this.state.articles[index])
    }))
    console.log(this.state.article)
  }
  render() {
    const { article, articles, url } = this.state;
    return (
      <div>
        <Route exact path="/" render={ () => (
          <ArticleListPage
            articles={articles}
            goToArticle={this.goToArticle}
            // generateUrl={this.generateUrl}
            // url={url}
          />
        )}/>
        <Route exact path="/userinfo" render={ () => (
          <UserInfoPage />
        )}/>
        <Route exact path="/article" render={ () => (
          <ArticlePage article={article}/>
        )}/>
      </div>
    );
  }
}

export default ArticleContainer;
