import React from "react";
import "../styles/ClubLeaderboard.css";
import PlatformCarousel from "./PlatformCarousel";

function ClubLeaderboard() {
  return (
    <div id="club-leaderboard-body">
      <h1 id="club-leaderboard-header">Club Leaderboard</h1>
      <div id="platform-select">
        <PlatformCarousel />
      </div>
    </div>
  );
}

export default ClubLeaderboard;
