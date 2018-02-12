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

    const names = [
      'First Button',
      'Second Button',
      'Third Button'
    ];

    const labels = names.map((item, i) => {
      return <Button
      label = {item}
      onClick = {this.clicked}
      key = {i}
      />
    });

    return (
      <div className="App">
        <div className = "Button">
          {labels}
        </div>

        <Display
        className = "Display"
        showLabel = {this.state.labelDisplay}/>
      </div>
    );
  }
}

export default App;
