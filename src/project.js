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
  constructor(props) {
    super(props);
    this.projectName = this.projectName.bind(this);
  }

  projectName() {
    return `${this.props.project.name}.txt`
  }

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
          <a href='/download.txt' download={this.projectName()}>
            <img src={downloadIcon} />
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
