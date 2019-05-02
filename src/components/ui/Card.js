import React from 'react';
import { connect } from 'react-redux';
import { seenFullArticle } from '../../redux/actions';
import PropTypes from 'prop-types';

const Card = props => {
  const { dispatch, setArticle, articleIndex, articlesTable } = props;
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
            <p>{setArticle.description}</p>
            <p>{`${setArticle.content}`}</p>
          </li>
          <a href={setArticle.url} target="_blank" rel="noopener noreferrer" className="external-lnk">
            <button className="external-btn" onClick={() => dispatch(seenFullArticle(articlesTable, articleIndex))}>View on Engagdet</button>
          </a>
        </ul>
      )}
    </main>
  );
}

Card.propTypes = {
  setArticle: PropTypes.object.isRequired,
  articleIndex: PropTypes.number.isRequired,
  articlesTable: PropTypes.array.isRequired
}

export default connect(state => state)(Card);
