import React from 'react';
import Navbar from './Navbar';
import HeadlineStories from './HeadlineStories';
import Cards from './Cards';
import Footer from './Footer';
import loading from '../../imgs/transparent-loading-4.gif';
import PropTypes from 'prop-types';

const  ArticleListPage = props => {
  const { topStories, articles, goToArticle } = props;
  return (
      <React.Fragment>
          <Navbar />
          {topStories.length === 0 ?
          null :
          (<HeadlineStories topStories={topStories} goToArticle={goToArticle}/>)}
          {articles.length === 0 ?
            (<img src={loading} className="no-results" alt="" />) :
            (<Cards cards={articles} goToArticle={goToArticle} type="main" />)}
          <Footer />
      </React.Fragment>
  );
}

ArticleListPage.propTypes = {
  topStories: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired,
  goToArticle: PropTypes.func.isRequired
}

export default ArticleListPage;
