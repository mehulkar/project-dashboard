import React, { Component } from 'react';
import searchIcon from './images/search.png'

class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
        <img src={searchIcon} alt='search' />
      </div>
    );
  }
}

export default SearchBar;
