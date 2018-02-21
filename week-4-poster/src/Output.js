import React, { Component } from "react";
import "./Output.css";

class Output extends Component {
  render() {
    return (
      <div className="Output">
        <h1>ima spring show 2018</h1>
        <p>
          {this.props.name}, {this.props.loc}
        </p>
        <p>{this.props.time}</p>
      </div>
    );
  }
}

export default Output;
