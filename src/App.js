import React, { Component } from 'react';
import logo from './images/beaver 1.png';
import settingsIcon from './images/setting icon.png';
import SearchBar from './components/search-bar/search-bar.js'
import SortBox from './components/sort-box/sort-box.js'
import ProjectList from './components/project-list.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      sortProperty: 'lastEdited'
    };

    this.filterProjects = this.filterProjects.bind(this);
    this.sortProjects = this.sortProjects.bind(this);
    this.spin = this.spin.bind(this);
  }

  filterProjects(searchValue) {
    this.setState({searchValue: searchValue});
    console.log(`searching by ${searchValue}`);
  }

  sortProjects(sortProperty) {
    this.setState({sortProperty: sortProperty})
  }

  spin(event) {
    let removeSpinner = (event)=> {
      event.target.classList.remove('spin');
      event.target.removeEventListener('animationend', removeSpinner);
    }
    // TODO look up browser compatibility and add prefixes
    event.target.addEventListener('animationend', removeSpinner.bind(event.target));
    event.target.classList.add('spin');
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} alt="logo" />
          <spacer></spacer>
          <img src={settingsIcon} alt="logo" onClick={this.spin} />
        </div>
        <div className='App-body'>
          <div className='App-row'>
            <SearchBar searchValue={this.state.searchValue} onSearchValueChange={this.filterProjects} />
            <spacer />
            <SortBox
              sortProperty={this.state.sortProperty}
              onSortValueChange={this.sortProjects}
            />
          </div>
          <ProjectList
            filter={this.state.searchValue}
            sortProperty={this.state.sortProperty}
          />
        </div>
      </div>
    );
  }
}

export default App;
