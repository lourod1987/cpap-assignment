import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer'

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

export default ArticlePage;