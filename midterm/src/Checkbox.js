import React, { Component } from "react";
import "./Checkbox.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.labelChange = this.labelChange.bind(this);
    this.state = {
      clicked: false
    };
  }

  labelChange(label) {
    this.props.onClick(this.props.label);
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    let classesN = "hideN";
    if (this.state.clicked) {
      classesN = "showN";
    }

    return (
      <div className="Checkbox" onClick={this.labelChange}>
        <label
          htmlFor={this.props.label}
          className={classesN}
        >
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Checkbox;
