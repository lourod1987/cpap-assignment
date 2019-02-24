import React, { Component } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';

export default class ArticleListPage extends Component {
    componentDidMount(){
        const apiKey = '2d2509aeb33d472da6f8f1cc4c4aa211';
        fetch(`https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(article => console.log(article))
    }
    render() {
        return (
            <div>
                <Navbar />
                <Cards />
                <Footer />
            </div>

        );
    }
}