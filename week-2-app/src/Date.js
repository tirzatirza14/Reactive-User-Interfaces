import React, { Component } from 'react';
import './Date.css'

class DateBox extends Component {
  render() {
    return (
      <div className="DateBox">
      <p>{this.props.datetext}</p>
      </div>
    );
  }
}

export default DateBox;
