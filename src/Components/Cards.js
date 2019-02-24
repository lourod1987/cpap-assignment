import React, { Component } from 'react';

export default class Cards extends Component {
    render() {
        const { articles } = this.props;
        return (
            <div>
                {/* <div>
                    {articles.map( articles => (
                        <img src={article} alt=""/>
                        <p>Company Name Filler</p>
                    ))}
                </div> */}
                <ul className="cards">
                    {articles.map( article => (
                        <li key={`${article.publishedAt}+`}>
                            <img src={article.urlToImage} alt=""/>
                            <p>Hashtag Temp</p>
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