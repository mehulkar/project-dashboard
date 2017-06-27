import React, { Component } from 'react';
import NewProject from './new-project.js'
import Project from './project.js'
import './project.css'

const projectData = [
  { id: 1, name: 'Demo App 1', lastEdited: new Date(2017, 1, 1) },
  { id: 2, name: 'Demo App 2', lastEdited: new Date(2017, 1, 1) },
  { id: 3, name: 'Demo App 3', lastEdited: new Date(2017, 1, 1) },
]

class ProjectList extends Component {
  render() {
    return (
      <div className='project-list'>
        <NewProject />
        {projectData.map((project) =>
          <Project key={project.id}>{project}</Project>
        )}
      </div>
    );
  }
}

export default ProjectList;
