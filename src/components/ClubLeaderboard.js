import React from "react";
import "../styles/ClubLeaderboard.css";
import PlatformCarousel from "./PlatformCarousel";

function ClubLeaderboard() {
  let clubLeaderboardProps = {
    root: "leaderboard",
    platform: "",
    avatar: "avatarClubLeaderboard",
    iconXbox: "leaderboard-xbox",
    iconPc: "leaderboard-pc",
    iconPlaystation: "leaderboard-playstation",
  };
  return (
    <div id="club-leaderboard-body">
      <h2 id="club-leaderboard-header">Club Leaderboard</h2>
      <div id="club-leaderboard-carousel-table">
        <PlatformCarousel details={clubLeaderboardProps} />
      </div>
    </div>
  );
}

export default ClubLeaderboard;
