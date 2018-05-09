import React, { Component } from "react";
import "./ShortReads.css";

class ShortReads extends Component {
  render() {
    return (
      <div className="ShortReads">
        <div className="image-container">
          <div className="image">image</div>
          <h1 className="title">{this.props.title}</h1>
        </div>

        <p className="body">{this.props.article}</p>
        <p className="body">{this.props.article}</p>
        <p className="body">{this.props.article}</p>
        <p className="quote">{this.props.quote}</p>
        <p className="body">{this.props.article}</p>
    
      </div>
    );
  }
}

export default ShortReads;
