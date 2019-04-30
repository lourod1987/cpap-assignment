import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleListPage from '../ui/ArticleListPage';
import UserInfoPage from '../ui/UserInfoPage';
import ArticlePage from '../ui/ArticlePage';
import SearchPage from '../ui/SearchPage';
import Lost from '../ui/Lost';
import { connect } from 'react-redux';
import { getTopStories } from '../../actions';

class TechAggContainer extends Component {

  state = {
    headlines: [],
    articles: [],
    article: {},
    visited: [],
    fullList: [],
    i: 0
  }

  componentDidMount() {
    const apiKey = '2d2509aeb33d472da6f8f1cc4c4aa211';
    // const topStoriesUrl = `https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=`;

    console.log('Test: ', this.props);
    this.props.dispatch(getTopStories);

    this.setState({
      headlines: this.props.getTopStories
    })

    // fetch(`${topStoriesUrl}${apiKey}`)
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({
    //     headlines: data.articles,
    //   })
    // })
    // .catch( error => console.log(error.message))

    fetch(`https://newsapi.org/v2/everything?sources=engadget&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        articles: data.articles,
      })
    })
    // .catch( error => console.log(error.message))

    setTimeout(() => this.visitedArticles(), 800);

    setTimeout(() => this.setArticlesForSearch(), 800);

    // setTimeout(() => console.log(this.state.headlines), 800);

  }

  goToArticle = (index, type, title) => {
    let article;
    switch (type) {
      case "headline":
        article = Object.assign({}, this.state.headlines[index]);
        break;
      case "main":
        article = Object.assign({}, this.state.articles[index]);
        index += 5;
        break;
      case "search":
        for (let i = 0; i < this.state.fullList.length; i++){
          if (this.state.fullList[i].title === title) {
            index = i;
            article = Object.assign({}, this.state.fullList[index]);
            break;
          }
        }
        break;
      default:
        console.error("An error has occurred");
    }

    let visited = [...this.state.visited];
    let visit = {
      ...visited[index],
      seen: 'True'
    }
    visited[index] = visit;
    
    this.setState({
      article,
      visited,
      i: index
    });
  }

  visitedArticles = () => {
    this.setState({
      visited: this.state.headlines.map( h => {
        return {
          viewed: h.title,
          seen: 'False',
          fullArticle: 'False' 
        }
        })
      });

    let visited = this.state.articles.map( a => {
      return {
        viewed: a.title,
        seen: 'False',
        fullArticle: 'False'
      }
    });
    this.setState( prevState => ({
      visited: [...prevState.visited].concat(visited)
    }))
  }

  setFullArticle = () => {
    const { i } = this.state;
    let visited = [...this.state.visited];
    let visit = {
      ...visited[i],
      fullArticle: 'True'
    }
    visited[i] = visit;
    this.setState({
      visited
    });
    // setTimeout(() => console.log(this.state.visited), 800)
  }

  setArticlesForSearch = () => {
    this.setState({
      fullList: this.state.headlines
    })

    this.setState( prevState => ({
      fullList: [...prevState.fullList].concat(this.state.articles)
    }))
  }

  render() {
    const { article, articles, visited, headlines, fullList } = this.state;
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" render={ () => (
              <ArticleListPage
                headlines={headlines}
                articles={articles}
                goToArticle={this.goToArticle}
              />
              // <TestPage />
            )}/>
              <Route exact path="/article/:id" render={ () => (
                <ArticlePage
                  headlines={headlines} 
                  article={article} 
                  visited={visited} 
                  setFullArticle={this.setFullArticle}
                  getIndex={this.getIndex}
                />
              )}/>
            <Route  exact path="/userinfo" render={ () => (
              <UserInfoPage
                visited={visited}
                articles={articles}
              />
            )}/>
            <Route exact path="/search" render={ () => (
              <SearchPage
                fullList={fullList}
                goToArticle={this.goToArticle}
              />
            )}/>
            <Route component={Lost} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

// export default ArticleContainer;
export default connect(state => state)(TechAggContainer);
// export default connect(
//   null,
//   { getTopStories }
// )(ArticleContainer)