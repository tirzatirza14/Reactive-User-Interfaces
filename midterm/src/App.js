import React, { Component } from "react";
import "./App.css";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Checkbox from "./Checkbox";

import { Route, BrowserRouter as Router, Link } from "react-router-dom";

import { CSSTransitionGroup } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.countrySort = this.countrySort.bind(this);
    this.sortDescending = this.sortDescending.bind(this);
    this.onClick = this.onClick.bind(this);
    this.nightMode = this.nightMode.bind(this);
    this.state = {
      mode: false,
      showInfo: false,
      showCountryInfo: false,
      search: "",
      checkSort: false,
      country: "",
      contacts: [
        {
          email: "Sara@nyu.edu",
          country: "Indonesia",
          firstName: "Sara",
          lastName: "Palmer",
          mobile: "+62293948202",
          home: "",
          image:
            "http://altairltd.co.uk/wp-content/uploads/2015/03/sarah_palmer.jpg"
        },
        {
          email: "Sara@nyu.edu",
          country: "Singapore",
          firstName: "Kerry",
          lastName: "Hagens",
          mobile: "+6592349028",
          home: "+6592349"
        },
        {
          email: "Gabriel@nyu.edu",
          country: "China",
          firstName: "Carlos",
          lastName: "Gabriel",
          mobile: "+8634829340",
          home: "",
          image:
            "http://3.bp.blogspot.com/-I13D9RK_7ZE/TbDkkgoDtPI/AAAAAAAAA4E/bllvYaMq_cc/s1600/Crl.jpg"
        },
        {
          email: "McCawiduley@nyu.edu",
          country: "Indonesia",
          firstName: "John",
          lastName: "McCawiduley",
          mobile: "+6223492384",
          home: "+629812394"
        },
        {
          email: "Ross@nyu.edu",
          country: "Singapore",
          firstName: "Ross",
          lastName: "Aftellio",
          mobile: "+6523485095",
          home: "+65834950",
          image: "https://i.imgur.com/8qCtXxk.jpg"
        },
        {
          email: "Darmawan@nyu.edu",
          country: "United States",
          firstName: "Edith",
          lastName: "Darmawan",
          mobile: "+123948573",
          home: "+1212848394"
        },
        {
          email: "Heather@nyu.edu",
          country: "Singapore",
          firstName: "Heather",
          lastName: "Ali",
          mobile: "+658505830",
          home: ""
        },
        {
          email: "Zija@nyu.edu",
          country: "South Africa",
          firstName: "Selma",
          lastName: "Zija",
          mobile: "+658205830",
          home: "",
          image:
            "https://0.academia-photos.com/26783112/7476671/8400188/s200_selma._iga.jpg_oh_8a3e5f9bf899d9399fb697c93bce4be9_oe_5581f6cf___gda___1435462820_03c9c901571855c3a451ae4cdb1f1321"
        },
        {
          country: "Indonesia",
          firstName: "Diyan",
          lastName: "Dian",
          mobile: "+6223957402",
          home: ""
        },
        {
          email: "Tehreem@nyu.edu",
          country: "Singapore",
          firstName: "Tehreem",
          lastName: "Niar",
          mobile: "+652349506",
          home: ""
        },
        {
          email: "NiarTa@nyu.edu",
          country: "Singapore",
          firstName: "Tatiana",
          lastName: "Nihar",
          mobile: "+652349506",
          home: ""
        },
        {
          email: "Selma@nyu.edu",
          country: "China",
          firstName: "Selma",
          lastName: "Zija",
          mobile: "+862374942",
          home: ""
        },
        {
          email: "Olesen@nyu.edu",
          country: "China",
          firstName: "Emille",
          lastName: "Olesen",
          mobile: "+8658203492",
          home: ""
        },
        {
          email: "Olsen@nyu.edu",
          country: "Sweden",
          firstName: "Emma",
          lastName: "Olsen",
          mobile: "+4658203492",
          home: ""
        },
        {
          email: "OlsenAm@nyu.edu",
          country: "Sweden",
          firstName: "Amanda",
          lastName: "Olsen",
          mobile: "+4658203492",
          home: ""
        },
        {
          email: "Rasheed@nyu.edu",
          country: "Indonesia",
          firstName: "Alïa",
          lastName: "Rasheed",
          mobile: "+6253203492",
          home: ""
        },
        {
          email: "RasheedM@nyu.edu",
          country: "Indonesia",
          firstName: "Maïa",
          lastName: "Rasheed",
          mobile: "+6253403492",
          home: ""
        },
        {
          email: "Ameen@nyu.edu",
          country: "Singapore",
          firstName: "Ahmad",
          lastName: "Ameen",
          mobile: "+6353403492",
          home: ""
        },
        {
          email: "Guillem@nyu.edu",
          country: "Singapore",
          firstName: "Sylvie",
          lastName: "Guillem",
          mobile: "+63523903492",
          home: ""
        },
        {
          email: "Leonardo@nyu.edu",
          country: "Indonesia",
          firstName: "Evan",
          lastName: "Leonardo",
          mobile: "+62523903492",
          home: ""
        },
        {
          email: "RasheedK@nyu.edu",
          country: "Indonesia",
          firstName: "Kaïa",
          lastName: "Rasheed",
          mobile: "+62523403492",
          home: ""
        },
        {
          email: "RasheedMia@nyu.edu",
          country: "United States",
          firstName: "Mïa",
          lastName: "Rasheed",
          mobile: "+1523403492",
          home: ""
        }
      ]
    };
  }

  countrySort(label, e) {
    this.setState({
      showCountryInfo: !this.state.showCountryInfo,
      country: label
    });
  }

  handleSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  onClick(e) {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }

  nightMode(e) {
    this.setState({
      mode: !this.state.mode
    });
  }

  sortDescending(e) {
    this.setState({
      checkSort: !this.state.checkSort
    });
  }

  render() {
    const contactsCopy = this.state.contacts.slice();

    let contactsCopyAsc = contactsCopy.sort((a, b) => {
      let nameA = a.firstName.toUpperCase();
      let nameB = b.firstName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });

    if (this.state.checkSort) {
      let contactsCopyDesc = contactsCopy.sort((a, b) => {
        if (a.lastName.toUpperCase() < b.lastName.toUpperCase()) {
          return -1;
        }
        if (a.lastName.toUpperCase() > b.lastName.toUpperCase()) {
          return 1;
        }
      });
    }

    if (this.state.search !== "") {
      contactsCopyAsc = contactsCopyAsc.filter(item => {
        const plus = "+";
        return (
          item.firstName.toLowerCase().match(this.state.search) ||
          item.lastName.toLowerCase().match(this.state.search) ||
          item.mobile.match(this.state.search) ||
          item.country.toLowerCase().match(this.state.search)
        );
      });
    }

    const countryList = this.state.contacts.map((item, i) => {
      return item.country;
    });

    const uniqueCountryList = countryList.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    let uniqueCountryListAsc = uniqueCountryList.sort((a, b) => {
      if (a.toUpperCase() < b.toUpperCase()) {
        return -1;
      }
      if (a.toUpperCase() > b.toUpperCase()) {
        return 1;
      }
    });

    const contCountry = uniqueCountryList.map((item, i) => {
      return (
        <div key={i}>
          <Checkbox label={item} onClick={this.countrySort} />
        </div>
      );
    });

    if (this.state.showCountryInfo) {
      contactsCopyAsc = contactsCopyAsc.filter((item, i) => {
        return item.country.match(this.state.country);
      });
    }

    const dispContacts = contactsCopyAsc.map((item, i) => {
      return (
        <Contacts
          key={i}
          nightMode={this.state.mode}
          firstName={item.firstName}
          lastName={item.lastName}
          mobile={item.mobile}
          home={item.home}
          email={item.email}
          country={item.country}
          image={item.image}
        />
      );
    });

    let countries = "hideCountries";
    if (this.state.showInfo) {
      countries += "showCountries";
    }

    let sortLabel = "Last Name";
    if (this.state.checkSort) {
      sortLabel = "First Name";
    }

    let modeButton = this.state.mode ? "night" : "day";
    let modeLabel = this.state.mode ? "DARK" : "LIGHT";

    return (
      <Router>
        <div className="App">
          <div className={modeButton}>
            <header>
              <input
                className="bodyInput"
                type="text"
                placeholder="Search Contacts"
                onChange={this.handleSearch}
              />
            </header>

            <div className="options">
              <div className="nameSort">
                <label onClick={this.sortDescending}>Sort by {sortLabel}</label>
              </div>
              <div className="country">
                <label onClick={this.onClick}>
                  Sort by Country <span> &#x02C5;</span>
                </label>

                <div className={countries}>{contCountry}</div>
              </div>
              <div className="nightMode">
                <label onClick={this.nightMode}>{modeLabel}</label>
              </div>
            </div>
            {dispContacts}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
