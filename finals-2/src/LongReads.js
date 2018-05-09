import React, { Component } from "react";
import "./LongReads.css";

class LongReads extends Component {
  render() {
    return (
      <div className="LongReads">
        <div className="image-container">
          <img
            className="image"
            src={this.props.article.img}
            alt="Ahok walking on a platform"
          />
          <div className="title">
            <mark>
              <h1>{this.props.article.title}</h1>
            </mark>
          </div>
        </div>
        <p className="body">{this.props.article.body}</p>
      </div>
    );
  }
}

export default LongReads;
