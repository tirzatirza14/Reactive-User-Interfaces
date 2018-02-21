import React, { Component } from "react";
import "./App.css";
import Input from "./Input";
import Output from "./Output";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      formValues: {}
    };
  }

  handleChange(value, name) {
    let formValues = this.state.formValues;
    formValues[name] = value;
    this.setState({
      formValues
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Forms">
          <Input
            inpName="name"
            onChange={this.handleChange}
            label="Event name"
            text={this.state.formValues["name"]}
          />
          <Input
            inpName="location"
            label="Location"
            onChange={this.handleChange}
            text={this.state.formValues["location"]}
          />
          <Input
            inpName="time"
            label="Time"
            onChange={this.handleChange}
            text={this.state.formValues["time"]}
          />
        </div>
        <Output
          name={this.state.formValues["name"]}
          loc={this.state.formValues["location"]}
          time={this.state.formValues["time"]}
        />
      </div>
    );
  }
}

export default App;
