import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import "../styles/Nav.css";

function Nav() {
  return (
    <div id="nav">
      <div id="nav-links">
        <div id="nav-home">
          <ScrollIntoView selector="#home">Home</ScrollIntoView>
        </div>
        <div id="nav-club-leaderboard">
          <ScrollIntoView selector="#club-leaderboard">
            Club Leaderboard
          </ScrollIntoView>
        </div>
        <div id="nav-find-match">
          <ScrollIntoView selector="#find-match">Find a match</ScrollIntoView>
        </div>
      </div>
    </div>
  );
}

export default Nav;
