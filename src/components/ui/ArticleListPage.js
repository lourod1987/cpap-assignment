import React, { Component } from 'react';
import Navbar from './Navbar';
import HeadlineStories from './HeadlineStories';
import Cards from './Cards';
import Footer from './Footer';
import loading from '../../imgs/transparent-loading-4.gif';

export default class ArticleListPage extends Component {
  state = {
    type: "main"
  }
    
  render() {   
    const { type } = this.state;
    const { headlines, articles, goToArticle } = this.props;
    return (
        <React.Fragment>
            <Navbar />
            {headlines.length === 0 ?
            null :
            (<HeadlineStories headlines={headlines} goToArticle={goToArticle}/>)}
            {articles.length === 0 ?
              (<img src={loading} className="no-results" alt="" />) :
              (<Cards cards={articles} goToArticle={goToArticle} type={type}/>)}
            <Footer />
        </React.Fragment>
    );
  }
}