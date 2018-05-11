import React, { Component } from "react";
import ShortCard from "./shortCard";
import "./SearchPage.css";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title:
            "China Leading A Cashless World: A Moment for Indonesia to Learn from China’s Success",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          snippet: "bore et dolore magna aliqua. Ut enim ad m",
          tag: "finance",
          img: "/images/cashless.jpg"
        },

        {
          title:
            "Brace Yourself Indonesian Millennials: 2019 Presidential Election Is Coming Faster Than You Thought",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          snippet: "bore et dolore magna aliqua. Ut enim ad m",
          tag: "election",
          img: "/images/election.jpg"
        },
        {
          title: "Late Night Thoughts About Digitalization in Indonesia",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          snippet: "bore et dolore magna aliqua. Ut enim ad m",
          tag: "technology",
          img: "/images/banner.jpg"
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

  render() {
    let articleCopy = this.state.articles.slice();

    if (this.props.result !== "") {
      articleCopy = articleCopy.filter(a => {
        let titleResult = a.title.toLowerCase().match(this.props.result);
        let tagResult = a.tag.toLowerCase().match(this.props.result);

        if (titleResult || tagResult) {
          return titleResult || tagResult;
        }
      });
    }

    const displayResults = articleCopy.map(a => {
      return (
        <ShortCard
          key={a.title}
          title={a.title}
          snippet={a.snippet}
          tag={a.tag}
          img={a.img}
        />
      );
    });

    return (
      <div className="SearchPage">
        <div className="texts">
          <p>are you looking for...</p>
          <h1>{this.props.result}</h1>
        </div>
        <div className="results">{displayResults}</div>
      </div>
    );
  }
}

export default SearchPage;
