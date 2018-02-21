import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.props.onChange(value, name);
  }

  render() {
    return (
      <div className="Input">
        <label>{this.props.label}</label>
        <input
          name={this.props.inpName}
          type="text"
          value={this.props.text}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Input;
