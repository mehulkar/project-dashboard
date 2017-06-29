import React, { Component } from 'react';
import plusIcon from '../images/plus .png'
import './project/project.css'

class NewProject extends Component {
  render() {
    return (
      <div className='project new-project'>
        <img src={plusIcon} className='plus-icon' height='66' width='66' />
        <span className='light'>Create new app</span>
      </div>
    );
  }
}

export default NewProject;
