import React, { Component } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';

export default class ArticleListPage extends Component {
    state = {
        articles: []
    }
    componentDidMount(){
        const apiKey = '2d2509aeb33d472da6f8f1cc4c4aa211';
        fetch(`https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.articles)
            console.log(this.state.articles)
            this.setState({
                articles: data.articles
            })
            console.log(this.state.articles)
        })
    }
    render() {
        const { articles } = this.state;
        return (
            <div>
                <Navbar />
                <Cards articles={articles}/>
                <Footer />
            </div>

        );
    }
}