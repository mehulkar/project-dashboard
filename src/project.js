import React, { Component } from 'react';
import projectIcon from './images/defaut icon.png'
import deleteIcon from './images/delete.png'
import downloadIcon from './images/download.png'
import './project.css'

// TODO: use moment.js or similar for this
function formattedDate(dateObject) {
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const date = dateObject.getDate();
  return `${year}-${month}-${date}`;
}

class Project extends Component {
  render() {
    return (
      <div className='project'>
        <img className='project-icon' src={projectIcon} width='66' height='66' />
        <span className='project-name'>{this.props.project.name}</span>
        <span className='project-date'>Last edit: {formattedDate(this.props.project.lastEdited)}</span>

        <div>
          <img src={deleteIcon}
              onClick={
                this.props.onDelete.bind(this, this.props.project)
              }
            />
          <img src={downloadIcon} />
        </div>
      </div>
    );
  }
}

export default Project;
