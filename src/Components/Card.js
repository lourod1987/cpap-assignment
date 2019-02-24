import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { article } = this.props;
    return (
      <div>
        <ul className="cards">
          <li>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img src={article.urlToImage} alt=""/>
            </a>
            {/* <p>Hashtag Temp</p> */}
            <h2>{article.title}</h2>
            <h3>{article.name + " - " + article.author}</h3>
            <p>{article.content}</p>
          </li>
        </ul>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <button>View on Engagdet</button>
        </a>
      </div>

    );
  }
}