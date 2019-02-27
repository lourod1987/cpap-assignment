import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer'

export default class ArticlePage extends Component {
  render() {
    const { article, setFullArticle } = this.props;
    return (
        <div>
            <Navbar />
            <Card article={article} setFullArticle={setFullArticle} />
            <Footer />
        </div>
    );
  }
}