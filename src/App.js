import React, { Component } from 'react';
import logo from './images/beaver 1.png';
import settingsIcon from './images/setting icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} alt="logo" />
          <spacer></spacer>
          <img src={settingsIcon} alt="logo" />
        </div>
        <div className='App-body'>
          TODO
        </div>
      </div>
    );
  }
}

export default App;
