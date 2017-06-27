import React, { Component } from 'react';
import searchIcon from './images/search.png'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.showSearchBar = this.showSearchBar.bind(this);
  }

  showSearchBar() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div className='search-bar'>
        <img src={searchIcon} alt='search' onClick={this.showSearchBar}/>
        <span>{this.state.open}</span>
      </div>
    );
  }
}

export default SearchBar;
