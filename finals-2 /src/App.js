import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import LongReads from "./LongReads";
import About from "./About";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      term: "",
      results: "",
      articles: [
        {
          title:
            "China Leading A Cashless World: A Moment for Indonesia to Learn from China’s Success",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          snippet: "bore et dolore magna aliqua. Ut enim ad m",
          tag: "finance",
          img: "/images/cashless.jpg",
          id: "China-Leading-A-Cashless-World"
        },

        {
          title:
            "Brace Yourself Indonesian Millennials: 2019 Presidential Election Is Coming Faster Than You Thought",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          snippet: "bore et dolore magna aliqua. Ut enim ad m",
          tag: "election",
          img: "/images/election.jpg",
          id: "Brace-Yourself"
        },
        {
          title: "Late Night Thoughts About Digitalization in Indonesia",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          snippet: "bore et dolore magna aliqua. Ut enim ad m",
          tag: "technology",
          img: "/images/banner.jpg",
          id: "Late-Night-Thoughts"
        },
        {
          title:
            "China Leading A Cashless World: A Moment for Indonesia to Learn from China’s Success",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          snippet: "bore et dolore magna aliqua. Ut enim ad m",
          tag: "finance",
          img: "/images/cashless.jpg",
          id: "China-Leading-A-Cashless-World"
        },

        {
          title:
            "Brace Yourself Indonesian Millennials: 2019 Presidential Election Is Coming Faster Than You Thought",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          snippet: "bore et dolore magna aliqua. Ut enim ad m",
          tag: "election",
          img: "/images/election.jpg",
          id: "Brace-Yourself"
        },
        {
          title: "Late Night Thoughts About Digitalization in Indonesia",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          snippet: "bore et dolore magna aliqua. Ut enim ad m",
          tag: "technology",
          img: "/images/banner.jpg",
          id: "Late-Night-Thoughts"
        }
      ]
    };
  }

  handleSearch(e) {
    this.setState({
      term: e.target.value
    });
  }

  submit(e) {
    let copy = this.state.term.slice();
    this.setState({ results: copy });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="Links">
            <Link to="/">Home</Link>

            <Link to="/About">About</Link>
          </div>
          <div>
            <form onSubmit={this.handleSearch}>
              <input
                type="text"
                className="SearchBar"
                placeholder="Search Articles"
                value={this.state.searchResult}
                onChange={this.handleSearch}
              />
            </form>
            {this.state.term.length > 0 && <Redirect to="/SearchPage" />}
          </div>

          <Route
            path="/LongReads/:id"
            render={props => {
              const article = this.state.articles.find(
                a => a.id === props.match.params.id
              );
              return <LongReads article={article} />;
            }}
          />

          <Route
            path="/SearchPage"
            render={props => {
              return <SearchPage result={this.state.term} />;
            }}
          />
          <Route path="/About" component={About} />
          <Route
            exact
            path="/"
            render={props => {
              const article = this.state.articles.find(
                a => a.id === props.match.params.id
              );
              return <HomePage id={this.state.articles.id} article={article}/>;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
