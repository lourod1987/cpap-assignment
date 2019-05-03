import React from 'react';
import { seenFullArticle } from '../../redux/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Card = props => {
  const { setArticle, articleIndex, articlesTable, clickFullArticle } = props;
  return (
    <main>
      {(Object.entries(setArticle).length === 0) ?
      <h3 className="refresh-warn">Start from homepage to load an individual article</h3> : (
        <ul className="card">
          <li>
            <a href={setArticle.url} target="_blank" rel="noopener noreferrer" onClick={() => clickFullArticle(articlesTable, articleIndex)}>
              <img src={setArticle.urlToImage} alt=""/>
            </a>
            <h2>{setArticle.title}</h2>
            <h3>{setArticle.source.name + " - " + setArticle.author}</h3>
            <p>{setArticle.description}</p>
            <p>{`${setArticle.content}`}</p>
          </li>
          <a href={setArticle.url} target="_blank" rel="noopener noreferrer" className="external-lnk">
            <button className="external-btn" onClick={() => clickFullArticle(articlesTable, articleIndex)}>View on Engadget</button>
          </a>
        </ul>
      )}
    </main>
  );
}

Card.propTypes = {
  setArticle: PropTypes.object.isRequired,
  articleIndex: PropTypes.number.isRequired,
  articlesTable: PropTypes.array.isRequired,
  clickFullArticle: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    setArticle: state.setArticle,
    articleIndex: state.articleIndex,
    articlesTable: state.articlesTable,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clickFullArticle(table, index) {
      dispatch(
        seenFullArticle(table, index)
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
