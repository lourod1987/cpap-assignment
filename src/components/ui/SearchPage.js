import React, { Component } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';

export default class SearchPage extends Component {
  state = {
    query: '',
    searchResults: [],
    type: "search"
  }

  handleSearch = query => {

    let filteredSearch = this.props.fullList.filter( article => {
      return article.title.toLowerCase().includes(query.toLowerCase())
    })

    this.setState({
        searchResults: filteredSearch,
        query
      })
  }



  //in order to properly track viewed articles on search page I need compare 
  // fullList array to currently selected article and return the matching index as an additional prop and or argument
  // to goToArticle function within cards

  render() {
    const { query, searchResults, type } = this.state;
    const { goToArticle } = this.props;
    return (
      <div>
        <Navbar />
        <form className="search-bar">
          <input 
              type="text"
              placeholder='Search'
              value={query}
              onChange={ evt => this.handleSearch(evt.target.value)}
          />
        </form>
        {(query.length > 0 && searchResults.length === 0 ) ? <p className="no-matching-results">No Results Match Your Query</p> : null }
        {(query.length === 0) ? <p className="search-instructions">Please Enter a Search Query</p> :
        <Cards cards={searchResults} goToArticle={goToArticle} type={type} /> }
        <Footer />
      </div>
    );
  }
}