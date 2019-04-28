import React from 'react';
import { Link } from 'react-router-dom';

const Cards = props => {
  let x = 0;
  const { cards, goToArticle, type } = props;
  return (
    <div className="main-cards-bg">
      <main className="main-cards-board">
        <ul className="cards">
          {cards.map( (article, index) => (
            <li key={`${article.publishedAt}+${x+=1}`} onClick={() => goToArticle(index, type, article.title)}>
              <Link to="/article" className="article-lnk">
                <img src={article.urlToImage} alt=""/>
                <h2>{article.title}</h2>
                <h3>{`${article.source.name} - ${article.author}`}</h3>
                <p>{article.description}</p>
                {/* <p>{article.content}</p> */}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Cards;