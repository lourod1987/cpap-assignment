import React from 'react';
import Navbar from './Navbar';
import HeadlineStories from './HeadlineStories';
import Cards from './Cards';
import Footer from './Footer';
import loading from '../../imgs/transparent-loading-4.gif';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const  ArticleListPage = props => {
  const { topStories, articles } = props;
  return (
      <React.Fragment>
          <Navbar />
          {topStories.length === 0 ?
          null :
          (<HeadlineStories topStories={topStories} />)}
          {articles.length === 0 ?
            (<img src={loading} className="no-results" alt="" />) :
            (<Cards cards={articles} type="main" />)}
          <Footer />
      </React.Fragment>
  );
}

ArticleListPage.propTypes = {
  topStories: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    topStories: state.topStories,
    articles: state.articles,
  }
}

export default connect(mapStateToProps)(ArticleListPage);
