import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer'

const ArticlePage = props => {
  const { headlines, article, setFullArticle } = props;
  return (
      <React.Fragment>
          <Navbar />
          <Card 
            headlines={headlines} 
            article={article} 
            setFullArticle={setFullArticle} 
          />
          <Footer />
      </React.Fragment>
  );
}

export default ArticlePage;