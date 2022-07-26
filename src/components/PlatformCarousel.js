import React from "react";
import { useState, useEffect } from "react";
import iconPc from "../assets/icon-pc.png";
import iconPlaystation from "../assets/icon-playstation.png";
import iconXbox from "../assets/icon-xbox.png";
import avatarClubLeaderboard from "../assets/avatar-club-leaderboard.png";
import StickyHeadTable from "./StickyHeadTable";

let platformList = [
  "leaderboard-xbox",
  "leaderboard-pc",
  "leaderboard-playstation",
];

function PlatformCarousel() {
  // Changes which platform is highlighted
  function handlePlatformSelect() {
    for (let i = 0; i < platformList.length; i++) {
      if (platformList[i] !== leaderboardPlatform) {
        document.getElementById(platformList[i]).style.backgroundColor =
          "black";
      }
    }
    document.getElementById(leaderboardPlatform).style.backgroundColor =
      "#F05742";
  }
  // Track the state of which platform is selected
  const [leaderboardPlatform, setLeaderboardPlatform] =
    useState("leaderboard-xbox");
  // Re-render component when new platform is selected
  useEffect(() => {
    console.log(leaderboardPlatform);
    handlePlatformSelect();
  }, [leaderboardPlatform]);

  return (
    <div id="club-leaderboard">
      <div id="platform-carousel-container">
        <div
          class="platform-icon"
          id="leaderboard-xbox"
          onClick={() => setLeaderboardPlatform("leaderboard-xbox")}
        >
          <img src={iconXbox} alt="iconXbox" height={100} width={100} />
        </div>
        <div
          class="platform-icon"
          id="leaderboard-pc"
          onClick={() => setLeaderboardPlatform("leaderboard-pc")}
        >
          <img src={iconPc} alt="iconPc" height={100} width={100} />
        </div>
        <div
          class="platform-icon"
          id="leaderboard-playstation"
          onClick={() => setLeaderboardPlatform("leaderboard-playstation")}
        >
          <img
            src={iconPlaystation}
            alt="iconPlaystation"
            height={100}
            width={100}
          />
        </div>
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
          <StickyHeadTable platform={leaderboardPlatform} />
        </div>
      </div>
    </div>
  );
}

export default PlatformCarousel;
