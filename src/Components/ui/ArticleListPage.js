import React, { Component } from 'react';
import Navbar from './Navbar';
import HeadlineStories from './HeadlineStories';
import Cards from './Cards';
import Footer from './Footer';
import loading from '../../imgs/transparent-loading-4.gif';

export default class ArticleListPage extends Component {
    
  render() {   
    const { headlines, articles, goToArticle } = this.props;
    return (
        <div>
            <Navbar />
            {headlines.length === 0 ?
            (<img src={loading} className="no-results" alt="" />) :
            (<HeadlineStories headlines={headlines} goToArticle={goToArticle}/>)}
            {articles.length === 0 ?
              (<img src={loading} className="no-results" alt="" />) :
              (<Cards articles={articles} goToArticle={goToArticle} />)}
            <Footer />
        </div>
    );
  }
}