import React, { Component } from "react";
import "./Contacts.css";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      showInfo: false
    };
  }

  onClick(e) {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }

  render() {
    let classes = "hideInfo";
    let labels = "hideLabel";
    if (this.state.showInfo) {
      classes += "showInfo";
      labels = "showLabel";
    }

    let nightMode = this.props.nightMode ? "night" : "day";

    return (
      <div className="Contacts">
        <div className="Item" onClick={this.onClick}>
          <div className={classes}>
            <div className="Container">
              <div className={nightMode}>
                <img onClick={this.onClick} src={this.props.image} />
              </div>
            </div>
          </div>
          <label htmlFor={this.props.firstName} className={labels}>
            {this.props.firstName} {this.props.lastName}
          </label>
          <div className={classes}>
            <p>
              <span>MOBILE</span> {this.props.mobile}
            </p>
            <p>
              <span className={this.props.home ? "show" : "none"}>HOME</span>{" "}
              {this.props.home}
            </p>
            <p className="Email">
              <span className={this.props.email ? "show" : "none"}>EMAIL</span>{" "}
              {this.props.email}
            </p>
            <p>
              <span className={this.props.country ? "show" : "none"}>
                COUNTRY
              </span>{" "}
              {this.props.country}
            </p>
            <p>
              <span className={this.props.notes ? "show" : "none"}>NOTES</span>{" "}
              {this.props.notes}
            </p>

            <div className="Icon">
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_442377.png"
                alt="WhatsApp icon"
              />
              <img
                src="https://cdn.iconscout.com/public/images/icon/free/png-512/wechat-logo-3ef05b13bd20911f-512x512.png"
                alt="Wechat Icon"
              />
            </div>
            <p className="edit">EDIT CONTACT</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
