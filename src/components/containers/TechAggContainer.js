import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleListPage from '../ui/ArticleListPage';
import UserInfoPage from '../ui/UserInfoPage';
import ArticlePage from '../ui/ArticlePage';
import SearchPage from '../ui/SearchPage';
import Lost from '../ui/Lost';
import ScrollToTop from '../ui/ScrollToTop';
import { connect } from 'react-redux';
import { getAllStories, setArticle, articleIndex, seenTechAggArticle, setResources } from '../../redux/actions';
import PropTypes from 'prop-types';

class TechAggContainer extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
    setTimeout(() => this.disResource(), 800);
  }

  disResource = () => {
    const { topStories, articles, buildNewArrays } = this.props;
    buildNewArrays(topStories, articles);
  }

  goToArticle = (index, type, title) => {
    const { searchList, articlesTable, viewArticle, setSeenArticle, curArticleNum } = this.props;
    switch (type) {
      case "headline":
        viewArticle(searchList[index]);
        break;
      case "main":
        index += 5;
        viewArticle(searchList[index]);
        break;
      case "search":
        for (let i = 0; i < searchList.length; i++){
          if (searchList[i].title === title) {
            index = i;
            viewArticle(searchList[index]);
            break;
          }
        }
        break;
      default:
        console.error("An error has occurred");
    }

    curArticleNum(index);
    setSeenArticle(articlesTable, index);
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" render={ () => (
                <ArticleListPage
                  goToArticle={this.goToArticle}
                />
              )}/>
                <Route exact path="/article/:id" render={ArticlePage} />
              <Route  exact path="/userinfo" component={UserInfoPage} />
              <Route exact path="/search" render={ () => (
                <SearchPage
                  goToArticle={this.goToArticle}
                />
              )}/>
              <Route component={Lost} />
            </Switch>
          </ScrollToTop>
        </Router>
      </React.Fragment>
    );
  }
}

TechAggContainer.propTypes = {
  topStories: PropTypes.array.isRequired, 
  articles: PropTypes.array.isRequired, 
  articlesTable: PropTypes.array.isRequired,
  searchList: PropTypes.array.isRequired, 
  setArticle: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
  topStories: state.topStories,
  articles: state.articles,
  articlesTable: state.articlesTable,
  searchList: state.searchList,
  setArticle: state.setArticle
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData() {
      dispatch(
        getAllStories()
      )
    }, 
    viewArticle(object) {
      dispatch(
        setArticle(object)
      )
    }, 
    curArticleNum(index) {
      dispatch(
        articleIndex(index)
      )
    }, 
    setSeenArticle(table, index) {
      dispatch(
        seenTechAggArticle(table, index)
      )
    }, 
    buildNewArrays(array1, array2) {
      dispatch(
        setResources(array1, array2)
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TechAggContainer);
