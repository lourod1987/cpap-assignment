import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeadlineStories extends Component {
  state = {
    i: 0,
  }

  componentDidMount() {
    this.startAutoChange();
  }

  componentWillUnmount() {
    this.clearInt();
  }

  startAutoChange = () => {
    this.myInt = setInterval(this.autoChange, 6000);
  }

  clearInt = () => {
    clearInterval(this.myInt);
  }

  autoChange = () => {
    const { headlines } = this.props;
    const { i } = this.state;
    if (i < headlines.length - 1) {
      this.setState( prevState => ({
        i: prevState.i += 1
      }));
    } else {
      this.setState({
        i: 0,
      });
    }
  }

  handleClick = index => {
    this.clearInt();
    this.setState({
      i: index,
    })
    this.startAutoChange();
  }

  render() {
    const { i } = this.state;
    const { headlines, goToArticle } = this.props;
    return (
      <div>
        {headlines.length === 0 ?
          (<p>Loading</p>) :
        (
          <div>
            <div className="primary-headline">
              <Link to="/article" className="primary-head-lnk" onClick={() => goToArticle(i, true)}>
                <img src={headlines[i].urlToImage} alt="" />
                <h2>{headlines[i].title}</h2>
              </Link>
            </div>
              <ul className="mini-headlines">
              {headlines.map( (headlines, index) => (
                <li key={headlines.publishedAt}>
                  <img src={headlines.urlToImage} alt="" onClick={() => this.handleClick(index)}/>
                  {/* <h2>{headlines.title}</h2> */}
                </li>
              ))}
              </ul>
          </div>
        )}
      </div>
    )
  }
}