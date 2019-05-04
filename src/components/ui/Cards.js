import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { goToArticle } from '../../redux/actions';

const Cards = props => {
  const { cards, goArticle, type } = props;

  // let articleId = cards.map( a => a.title.split(' '));
  // let articleLink = articleId.toLowerCase();
  // console.log(articleLink[1].join('-'))
  return (
    <div className="main-cards-bg">
      <main className="main-cards-board">
        <ul className="cards">
          {cards.map( (article, index) => 
            (
            <li key={`${article.publishedAt}+${index}`} onClick={() => goArticle(index, type, article.title)}>
              <Link to={`/article/${index}`}>
              {/* <Link to={`/article/${articleId[index].join('-').toLowerCase()}`} className="article-lnk"> */}
                <img src={article.urlToImage} alt=""/>
                <h2>{article.title}</h2>
                <h3>{`${article.source.name} - ${article.author}`}</h3>
                <p>{article.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  goArticle: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    goArticle(index, type, title) {
      dispatch(
        goToArticle(index, type, title)
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
// export default Cards;
