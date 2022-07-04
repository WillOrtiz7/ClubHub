import React from "react";
import Home from "./Home";
import ClubLeaderboard from "./ClubLeaderboard";
import FindMatch from "./FindMatch";
import Nav from "./Nav";
import "../styles/Main.css";

function Main() {
  return (
    <div id="main">
      <div id="nav-container">
        <Nav />
      </div>
      <div id="main-content">
        <div id="home">
          <Home />
        </div>
        <div id="club-leaderboard">
          <ClubLeaderboard />
        </div>
        <div id="find-match">
          <FindMatch />
        </div>
      </div>
    </div>
  );
}

export default Main;
