import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      labelDisplay: ""
    }
    this.clicked = this.clicked.bind(this);
    }

  clicked(label){
    this.setState({
      labelDisplay: label
    });
  }

  render() {
    return (
      <div className="App">
      <div className = "Button">
        <Button

        label = "First Button"
        onClick = {this.clicked}
        />
        <Button

        onClick = {this.clicked}
        label = "Second Button"
        />
        <Button

        onClick = {this.clicked}
        label = "Third Button"

        />
          </div>
        <Display
        className = "Display"
        showLabel = {this.state.labelDisplay}/>
      </div>
    );
  }
}

export default App;
