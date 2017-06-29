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
    let filtered = projectData;
    const filter = this.props.filter;

    // TODO: Figure out How to make this an onChange
    // filter rather than inline in render
    if (filter) {
      const filterRegex = RegExp(filter, 'i');
      filtered = projectData.filter(project => project.name.match(filterRegex));
    }

    const sortProp = this.props.sortProperty;

    let sorted = filtered.sort((a, b) => {
      let propertyA = a[sortProp];
      let propertyB = b[sortProp];
      let value = 0;
      switch (sortProp) {
        case 'lastEdited':
          value = propertyB - propertyA;
        case 'name':
          if (propertyA < propertyB) { value = -1 ;}
          if (propertyA > propertyB) { value = 1 ;}
          break;
      }
      return value;
    });

    return (
      <div className='project-list'>
        <NewProject />
        {sorted.map((project) =>
          <Project key={project.id} name={project.name} lastEdited={project.lastEdited} />
        )}
      </div>
    );
  }
}

export default ProjectList;
