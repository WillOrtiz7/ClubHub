import React from "react";
import "../styles/ClubLeaderboard.css";
import avatarClubLeaderboard from "../assets/avatar-club-leaderboard.png";
import CollapsibleTable from "./CollapsibleTable";

function ClubLeaderboard() {
  return (
    <div id="club-leaderboard-body">
      <h1 id="club-leaderboard-header">Club Leaderboard</h1>
      <div id="club-leaderboard-content">
        <CollapsibleTable />
        <img
          id="club-leaderboard-avatar"
          src={avatarClubLeaderboard}
          alt="Avatar club leaderboard"
          height={350}
          width={250}
        />
      </div>
    </div>
  );
}

export default ClubLeaderboard;
