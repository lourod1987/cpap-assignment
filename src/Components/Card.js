import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { article, setFullArticle } = this.props;
    return (
      <div>
        {(Object.entries(article).length === 0) ?
        <h3 className="refresh-warn">Start from homepage to load an individual article</h3> : (
          <ul className="card">
            <li>
              <a href={article.url} target="_blank" rel="noopener noreferrer" onClick={() => setFullArticle()}>
                <img src={article.urlToImage} alt=""/>
              </a>
              <h2>{article.title}</h2>
              <h3>{article.source.name + " - " + article.author}</h3>
              <p>{article.content}</p>
            </li>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="external-lnk" onClick={() => setFullArticle()}>
              <button className="external-btn">View on Engagdet</button>
            </a>
          </ul>
        )}
      </div>

    );
  }
}