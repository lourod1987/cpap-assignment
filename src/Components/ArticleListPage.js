import React, { Component } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';

export default class ArticleListPage extends Component {
    
  render() {   
    const { articles, goToArticle } = this.props;
    return (
        <div>
            <Navbar />
            <Cards articles={articles} goToArticle={goToArticle} />
            {/* <Cards articles={articles} generateUrl={generateUrl} url={url} /> */}
            <Footer />
        </div>
    );
  }
}