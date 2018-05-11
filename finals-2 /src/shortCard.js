import React, { Component } from "react";
import "./shortCard.css";

class ShortCard extends Component {
  render() {
    return (
      <div className="ShortCard">
        <div className="container">
        
          <div className="container-title">
            <mark>{this.props.title}</mark>
          </div>
          <img
            className="container-image"
            src={this.props.img}
            alt={this.props.tag}
          />
          <div className="container-snippet">{this.props.snippet}</div>
        </div>
      </div>
    );
  }
}

export default ShortCard;
