import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <p className = "ArtTitle">{this.props.boxTitle}</p>
        <p className = "ArtBody">{this.props.boxText}</p>
        <div className = "ArtAuthor">
          <p>By</p><p className = "AuthorName">{this.props.boxAuthor}</p>
        </div>
      </div>
    );
  }
}

export default Box;
