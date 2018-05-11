import React, { Component } from 'react';
import './latest.css';

class Popular extends Component {
  render() {
    return (
      <div className="Popular">
        <h3>{this.props.title}</h3>
        <p>{this.props.snippet}</p>
      </div>
    );
  }
}

export default Popular;
