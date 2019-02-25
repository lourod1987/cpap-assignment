import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cards extends Component {
  render() {
    const { articles, goToArticle } = this.props;
    return (
      <div>
        <ul className="cards">
          {articles.map( (article, index) => (
            <li key={`${article.publishedAt}+`}>
              <Link to="/article" className="article-lnk">
                <img src={article.urlToImage} onClick={() => goToArticle(index)} alt=""/>
                <h2>{article.title}</h2>
                <h3>{`${article.source.name} - ${article.author}`}</h3>
                <p>{article.content}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}