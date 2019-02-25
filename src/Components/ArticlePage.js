import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer'

export default class ArticlePage extends Component {
  render() {
    const { article, fullArticle } = this.props;
    return (
        <div>
            <Navbar />
            <Card article={article} fullArticle={fullArticle} />
            <Footer />
        </div>
    );
  }
}