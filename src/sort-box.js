import React, { Component } from 'react';

class SortBox extends Component {
  render() {
    return (
      <div className='sort-box'>
        <select>
          <option value='Last Edit'>Last Edit</option>
          <option value='Name'>Name</option>
        </select>
      </div>
    );
  }
}

export default SortBox;
