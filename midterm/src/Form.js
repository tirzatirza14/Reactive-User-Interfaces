import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.mobileChange = this.mobileChange.bind(this);
    this.homeChange = this.homeChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
    this.notesChange = this.notesChange.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.state = {
      showInfo: false,
      firstName: "",
      lastName: "",
      email: "",
      home: "",
      mobile: "",
      country: "",
      notes: ""
    };
  }

  onClick(e) {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }

  firstNameChange(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  lastNameChange(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  emailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  mobileChange(e) {
    this.setState({
      mobile: e.target.value
    });
  }

  homeChange(e) {
    this.setState({
      home: e.target.value
    });
  }

  countryChange(e) {
    this.setState({
      country: e.target.value
    });
  }

  notesChange(e) {
    this.setState({
      notes: e.target.value
    });
  }

  addPerson() {
    this.props.onSubmit(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.home,
      this.state.mobile,
      this.state.country,
      this.state.notes
    );
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      home: "",
      mobile: "",
      country: "",
      notes: ""
    });
  }
  render() {
    let classes = "hideForm";
    if (this.state.showInfo) {
      classes += "showForm";
    }
    return (
      <div className="Form">
        <div className="Fields" >
          <h3 onClick={this.onClick}>New Contact</h3>
          <div className={classes}>
            <div className="Names">
              <input
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.firstNameChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.lastNameChange}
              />
            </div>
            <div className="Info">
              <input
                type="number"
                placeholder="Mobile"
                value={this.state.mobile}
                onChange={this.mobileChange}
              />
              <input
                type="number"
                placeholder="Home Number"
                value={this.state.home}
                onChange={this.homeChange}
              />
              <input
                type="Email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.emailChange}
              />
              <input
                type="text"
                placeholder="Country"
                value={this.state.country}
                onChange={this.countryChange}
              />
              <input
                type="text"
                placeholder="Notes"
                value={this.state.notes}
                onChange={this.notesChange}
              />

            <button onClick={this.addPerson}>Add to List</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
