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
    const { topStories, articles, goToArticle } = this.props;
    return (
        <React.Fragment>
            <Navbar />
            {topStories.length === 0 ?
            null :
            (<HeadlineStories topStories={topStories} goToArticle={goToArticle}/>)}
            {articles.length === 0 ?
              (<img src={loading} className="no-results" alt="" />) :
              (<Cards cards={articles} goToArticle={goToArticle} type={type}/>)}
            <Footer />
        </React.Fragment>
    );
  }
}