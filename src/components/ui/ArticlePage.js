import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import PropTypes from 'prop-types';

const ArticlePage = props => {
  const { setArticle } = props;
  return (
      <React.Fragment>
          <Navbar />
          <Card
            setArticle={setArticle}
          />
          <Footer />
      </React.Fragment>
  );
}

ArticlePage.propTypes = {
  setArticle: PropTypes.object.isRequired
}

export default ArticlePage;