import React from 'react';

const Card = props => {
  const { headlines, article, setFullArticle } = props;
  return (
    <main>
      {(Object.entries(article).length === 0) ?
      <h3 className="refresh-warn">Start from homepage to load an individual article</h3> : (
        <ul className="card">
          <li>
            <a href={article.url || headlines.url} target="_blank" rel="noopener noreferrer" onClick={() => setFullArticle()}>
              <img src={article.urlToImage || headlines.urlToImage} alt=""/>
            </a>
            <h2>{article.title || headlines.title}</h2>
            <h3>{article.source.name + " - " + article.author || headlines.source.name + " - " + headlines.author}</h3>
            {/* <p>{article.description || headlines.description}</p> */}
            <p>{`${article.description || headlines.description} \n ${article.content || headlines.content}`}</p>
          </li>
          <a href={article.url || headlines.url} target="_blank" rel="noopener noreferrer" className="external-lnk">
            <button className="external-btn" onClick={() => setFullArticle()}>View on Engagdet</button>
          </a>
        </ul>
      )}
    </main>
  );
}

export default Card;