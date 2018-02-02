import React, { Component } from 'react';
import PlacehImg from './image.jpeg';
import './ImageBox.css';


class ImageBox extends Component {
  render() {
    return (
      <div className="ImageBox">
        <div className = "ImgContainer">
        <img className="Image" src={PlacehImg}/>
        </div>
      </div>
    );
  }
}

export default ImageBox;
