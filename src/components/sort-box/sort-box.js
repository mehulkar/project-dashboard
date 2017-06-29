import React, { Component } from 'react';
import './sort-box.css';

class SortBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: this.props.sortProperty
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSortValueChange(event.target.value);
  }

  render() {
    return (
      <div className='sort-box'>
        <span className='light'>Sort by</span>
        <select onChange={this.handleChange}>
          <option value='lastEdited'>Last Edit</option>
          <option value='name'>Name</option>
        </select>
      </div>
    );
  }
}

export default SortBox;
