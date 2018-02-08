import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.labelChange = this.labelChange.bind(this);
  }

  labelChange(label){
      this.props.onClick(this.props.label)
  }

  render() {
    return (
      <div className="Button">
        <button onClick = {this.labelChange}>
        {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button
;
