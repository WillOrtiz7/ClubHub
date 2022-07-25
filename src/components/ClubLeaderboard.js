import React from "react";
import "../styles/ClubLeaderboard.css";
import avatarClubLeaderboard from "../assets/avatar-club-leaderboard.png";
import StickyHeadTable from "./CollapsibleTable";
import PlatformCarousel from "./PlatformCarousel";

function ClubLeaderboard() {
  return (
    <div id="club-leaderboard-body">
      <h1 id="club-leaderboard-header">Club Leaderboard</h1>
      <div id="platform-select">
        <PlatformCarousel />
      </div>
      <div id="club-leaderboard-content">
        <img
          id="club-leaderboard-avatar"
          src={avatarClubLeaderboard}
          alt="Avatar club leaderboard"
          height={350}
          width={250}
        />
        <div id="club-leaderboard-table">
          <StickyHeadTable />
        </div>
      </div>
    </div>
  );
}

export default ClubLeaderboard;
