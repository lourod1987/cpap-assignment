import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleListPage from '../ui/ArticleListPage';
import UserInfoPage from '../ui/UserInfoPage';
import ArticlePage from '../ui/ArticlePage';
import SearchPage from '../ui/SearchPage';
import Lost from '../ui/Lost';
import ScrollToTop from '../ui/ScrollToTop';
import { connect } from 'react-redux';
import { getAllStories, setResources } from '../../redux/actions';
import PropTypes from 'prop-types';

class TechAggContainer extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
    setTimeout(() => this.disResource(), 800);
  }

  disResource = () => {
    const { topStories, articles, buildResources } = this.props;
    buildResources(topStories, articles);
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" render={ () => (
                <ArticleListPage />
              )}/>
              <Route exact path="/article/:id" component={ArticlePage} />
              <Route  exact path="/userinfo" component={UserInfoPage} />
              <Route exact path="/search" render={ () => (
                <SearchPage />
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
}

const mapStateToProps = state => {
  return {
  topStories: state.topStories,
  articles: state.articles,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData() {
      dispatch(
        getAllStories()
      )
    },
    buildResources(array1, array2) {
      dispatch(
        setResources(array1, array2)
      )
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TechAggContainer);
