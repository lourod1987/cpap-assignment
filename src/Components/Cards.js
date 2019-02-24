import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cards extends Component {
    render() {
        const { articles, generateUrl, url, goToArticle } = this.props;
        return (
            <div>
                {/* <div>
                    {articles.map( articles => (
                        <img src={article} alt=""/>
                        <p>Company Name Filler</p>
                    ))}
                </div> */}
                <ul className="cards">
                    {articles.map( (article, index) => (
                        <li key={`${article.publishedAt}+`}>
                            <Link to="/article">
                                <img src={article.urlToImage} onClick={() => goToArticle(index)} alt=""/>
                                {/* <img src={article.urlToImage} onClick={() => this.props.generateUrl(article.source.name, article.author, article.publishedAt)} alt=""/> */}
                            </Link>
                            {/* <p>Hashtag Temp</p> */}
                            <h2>{article.title}</h2>
                            <h3>{`${article.source.name} - ${article.author}`}</h3>
                            <p>{article.content}</p>
                        </li>
                    ))}
                </ul>
            </div>

        );
    }
}