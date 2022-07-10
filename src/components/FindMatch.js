import React from "react";
import "../styles/FindMatch.css";
import avatarFindMatch from "../assets/avatar-find-match.png";

function FindMatch() {
  return (
    <div id="find-match-body">
      <h1 id="find-match-header">Find a Match</h1>
      <div id="find-match-content">
        <p>Search for a match here</p>
        <img
          id="find-match-avatar"
          src={avatarFindMatch}
          alt="Avatar club leaderboard"
          height={350}
          width={250}
        />
      </div>
    </div>
  );
}

export default FindMatch;
