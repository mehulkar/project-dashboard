import React, { Component } from 'react';
import logo from './images/beaver 1.png';
import settingsIcon from './images/setting icon.png';
import SearchBar from './search-bar.js'
import SortBox from './sort-box.js'
import ProjectList from './project-list.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };

    this.filterProjects = this.filterProjects.bind(this);
  }

  filterProjects(searchValue) {
    this.setState({searchValue: searchValue});
    console.log(`searching by ${searchValue}`);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} alt="logo" />
          <spacer></spacer>
          <img src={settingsIcon} alt="logo" />
        </div>
        <div className='App-body'>
          <div className='App-row'>
            <SearchBar searchValue={this.state.searchValue} onSearchValueChange={this.filterProjects} />
            <spacer />
            <span>Sort by:</span>
            <SortBox />
          </div>
          <ProjectList filter={this.state.searchValue} />
        </div>
      </div>
    );
  }
}

export default App;
