import React, { Component } from 'react';
import searchIcon from './images/search.png'
import './search-bar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchValue: this.props.searchValue,
    };
    this.showSearchBar = this.showSearchBar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  showSearchBar() {
    this.setState({open: !this.state.open})
    // TODO: figure out how to set focus on the search bar
  }

  handleChange(event) {
    this.props.onSearchValueChange(event.target.value);
  }

  handleKeyPress(event) {
    if (event.keyCode === 27) {
      this.setState({open: false});
    }
  }

  render() {
    let searchBar = null;
    if (this.state.open) {
      searchBar = <input value={this.props.searchValue}
                        placeholder='Search for a project...'
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyPress}/>
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
