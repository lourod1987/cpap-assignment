import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';

const ArticlePage = () => {
  return (
      <React.Fragment>
          <Navbar />
          <Card/>
          <Footer />
      </React.Fragment>
  );
}

export default ArticlePage;