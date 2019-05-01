import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleListPage from '../ui/ArticleListPage';
import UserInfoPage from '../ui/UserInfoPage';
import ArticlePage from '../ui/ArticlePage';
import SearchPage from '../ui/SearchPage';
import Lost from '../ui/Lost';
import ScrollToTop from '../ui/ScrollToTop';
import { connect } from 'react-redux';
import { getAllStories, setArticle, articleIndex, seenTechAggArticle, setResources } from '../../actions';

class TechAggContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAllStories());

    setTimeout(() => this.disResource(), 800);
  }

  disResource = () => {
    const { dispatch, topStories, articles } = this.props;
    dispatch(setResources(topStories, articles));
  }

  goToArticle = (index, type, title) => {
    const { dispatch, searchList, articlesTable } = this.props;
    switch (type) {
      case "headline":
        dispatch(setArticle(searchList[index]));
        break;
      case "main":
        index += 5;
        dispatch(setArticle(searchList[index]));
        break;
      case "search":
        for (let i = 0; i < searchList.length; i++){
          if (searchList[i].title === title) {
            index = i;
            dispatch(setArticle(searchList[index]));
            break;
          }
        }
        break;
      default:
        console.error("An error has occurred");
    }

    dispatch(articleIndex(index));
    dispatch(seenTechAggArticle(articlesTable, index));    
  }

  render() {
    const { topStories, articles, articlesTable, searchList, setArticle } = this.props;
    return (
      <React.Fragment>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" render={ () => (
                <ArticleListPage
                  topStories={topStories}
                  articles={articles}
                  goToArticle={this.goToArticle}
                />
              )}/>
                <Route exact path="/article/:id" render={ () => (
                  <ArticlePage
                    setArticle={setArticle}
                  />
                )}/>
              <Route  exact path="/userinfo" render={ () => (
                <UserInfoPage
                  articlesTable={articlesTable}
                />
              )}/>
              <Route exact path="/search" render={ () => (
                <SearchPage
                  searchList={searchList}
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

export default connect(state => state)(TechAggContainer);
