import React from 'react';
import { connect } from 'react-redux';
import { seenFullArticle } from '../../actions';

const Card = props => {
  const { dispatch, setArticle, articleIndex, articlesTable } = props;
  // console.log("articleTable: ", articlesTable);
  return (
    <main>
      {(Object.entries(setArticle).length === 0) ?
      <h3 className="refresh-warn">Start from homepage to load an individual article</h3> : (
        <ul className="card">
          <li>
            <a href={setArticle.url} target="_blank" rel="noopener noreferrer" onClick={() => dispatch(seenFullArticle(articlesTable, articleIndex))}>
              <img src={setArticle.urlToImage} alt=""/>
            </a>
            <h2>{setArticle.title}</h2>
            <h3>{setArticle.source.name + " - " + setArticle.author}</h3>
            {/* <p>{article.description || topStories.description}</p> */}
            <p>{`${setArticle.description} \n ${setArticle.content}`}</p>
          </li>
          <a href={setArticle.url} target="_blank" rel="noopener noreferrer" className="external-lnk">
            <button className="external-btn" onClick={() => dispatch(seenFullArticle(articlesTable, articleIndex))}>View on Engagdet</button>
          </a>
        </ul>
      )}
    </main>
  );
}

export default connect(state => state)(Card);
