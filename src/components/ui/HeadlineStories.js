import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MobileMiniHeadlines from './MobileMiniHeadlines';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { goToArticle } from '../../redux/actions';

class HeadlineStories extends Component {
  state = {
    i: 0,
    circleArr: [
      '',
      '',
      '',
      '',
      ''
    ]
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
    const { topStories } = this.props;
    const { i } = this.state;
    if (i < topStories.length - 1) {
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
    const { i, circleArr } = this.state;
    const { topStories, goArticle } = this.props;
    // let articleId = topStories.map( a => a.title.split(' '));
    return (
      <React.Fragment>
        {topStories.length === 0 ?
          (<p>Loading</p>) :
        (
          <div className="headlines-container">
            <div className="primary-headline">
              <Link to={`/article/${i}`}  className="primary-head-lnk" onClick={() => goArticle(i, "headline", null)}>
              {/* <Link to={`/article/top-stories/${articleId[i].join('-').toLowerCase()}`}  className="primary-head-lnk" onClick={() => goToArticle(i, "headline", null)}> */}
                <img src={topStories[i].urlToImage} alt="" />
                <h2>{topStories[i].title}</h2>
              </Link>
            </div>
              <MobileMiniHeadlines  circleArr={circleArr}  i={i} handleClick={this.handleClick} />
              <ul className="mini-headlines">
              {topStories.map( (topStory, index) => (
                <li key={topStory.publishedAt}>
                  <img src={topStory.urlToImage} alt="" className={ (i === index) ? "currentlySelected" : ""} onClick={() => this.handleClick(index)}/>
                  {/* <h2>{topStory.title}</h2> */}
                </li>
              ))}
              </ul>
          </div>
        )}
      </React.Fragment>
    )
  }
}

HeadlineStories.propTypes = {
  topStories: PropTypes.array.isRequired,
  goArticle: PropTypes.func.isRequired
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    goArticle(index, type, title) {
      dispatch(
        goToArticle(index, type, title)
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadlineStories);

// export default HeadlineStories;
