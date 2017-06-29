import React, { Component } from 'react';
import searchIcon from './images/search.png'
import './search-bar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchValue: ''
    };
    this.showSearchBar = this.showSearchBar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showSearchBar() {
    this.setState({open: !this.state.open})
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  render() {
    let searchBar = null;
    if (this.state.open) {
      searchBar = <input value={this.state.searchValue}
                        placeholder='Search for a project...'
                        onChange={this.handleChange} />
    }
    return (
      <div className='search-bar'>
        <img src={searchIcon} alt='search' onClick={this.showSearchBar}/>
        {searchBar}
      </div>
    );
  }
}

export default SearchBar;
