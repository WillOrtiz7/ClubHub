import React from "react";
import Home from "./Home";
import ClubLeaderboard from "./ClubLeaderboard";
import FindMatch from "./FindMatch";
import Nav from "./Nav";
import "../styles/Main.css";

function Main() {
  return (
    <div id="main">
      <div className="nav-container">
        <Nav />
      </div>
      <div id="main-content">
        <div id="home" className="standard-clubhub-page-container">
          <Home />
        </div>
        <div id="club-leaderboard" className="standard-clubhub-page-container">
          <ClubLeaderboard />
        </div>
        <div id="find-match" className="standard-clubhub-page-container">
          <FindMatch />
        </div>
      </div>
    </div>
  );
}

export default Main;
