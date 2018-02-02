import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
  render() {
    return (
      <div className="Box">
          <p>By</p><p className = "AuthorName">{this.props.boxAuthor}</p>
      <div className = "Article">
        <div className ="DateBox">
          <p>{this.props.datetext}</p>
        </div>
        <div className ="MiddleBox">
          <p className = "ArtTitle">{this.props.boxTitle}</p>
          <p className = "ArtBody">{this.props.boxText}</p>
          <div className = "ArtAuthor">
            <p>By</p><p className = "AuthorName">{this.props.boxAuthor}</p>
          </div>
        </div>
        <div className = "ImgContainer">
          <img src={this.props.imgFill}/>
        </div>
        </div>
      </div>
    );
  }
}

export default Box;
