import React, { Component } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SearchPage extends Component {
  state = {
    query: '',
    searchResults: []
  }

  handleSearch = query => {
    let filteredSearch = this.props.searchList.filter( article => {
      return article.title.toLowerCase().includes(query.toLowerCase())
    });

    this.setState({
        searchResults: filteredSearch,
        query
      });
  }

  render() {
    const { query, searchResults } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <form className="search-bar" role="search">
          <input 
              type="search"
              name="search"
              aria-label="Search all articles"
              placeholder="Search"
              value={query}
              onChange={ evt => this.handleSearch(evt.target.value)}
          />
        </form>
        {(query.length > 0 && searchResults.length === 0 ) ? <p className="no-matching-results">No Results Match Your Query</p> : null }
        {(query.length === 0) ? <p className="search-instructions">Please Enter a Search Query</p> :
        <Cards cards={searchResults} type="search" /> }
        <Footer />
      </React.Fragment>
    );
  }
}

SearchPage.propTypes = {
  searchList: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
  searchList: state.searchList
  }
};

export default connect(mapStateToProps)(SearchPage);
