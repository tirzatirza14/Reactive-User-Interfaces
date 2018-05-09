import React, { Component } from "react";
import "./HomePage.css";
import ShortCard from "./shortCard";
import Update from "./Update";
import Popular from "./latest";
import { Link, Redirect } from "react-router-dom";

class HomePage extends Component {
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
  render() {
    const bold = "Digitalisation";

    let shortCard = this.state.articles.map(a => {
      return (
        <Link to={"/LongReads/" + a.id}>
          <ShortCard
            key={a.title}
            title={a.title}
            snippet={a.snippet}
            tag={a.tag}
            img={a.img}
          />
        </Link>
      );
    });

    let popCards = this.state.articles.map(a => {
      return (
        <Link to={"/LongReads/" + a.id}>
          <Popular
            key={a.title}
            title={a.title}
            snippet={a.snippet}
            tag={a.tag}
            img={a.img}
          />
        </Link>
      );
    });

    return (
      <div className="HomePage">
        <div className="banner-container">
          <img
            className="banner-image"
            src="/images/banner.jpg"
            alt="Ahok walking on a platform"
          />
          <div className="banner-title">
            <mark>
              Late Night Thoughts On <span className="bold"> {bold} </span> in
              Indonesia
            </mark>
          </div>
        </div>
        <div className="popular-body">
          <h1>POPULAR</h1>
          {popCards}
        </div>

        <div className="latest-body">
          <h1>THE LATEST</h1>
          {shortCard}
        </div>
      </div>
    );
  }
}

export default HomePage;
