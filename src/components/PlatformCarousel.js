import React from "react";
import { useState, useEffect } from "react";
import iconPc from "../assets/icon-pc.png";
import iconPlaystation from "../assets/icon-playstation.png";
import iconXbox from "../assets/icon-xbox.png";

let platformList = [
  "leaderboard-xbox",
  "leaderboard-pc",
  "leaderboard-playstation",
];

function PlatformCarousel() {
  function handlePlatformSelect(platform) {
    setLeaderboardPlatform(platform);
    console.log(leaderboardPlatform);
    for (let i = 0; i < platformList.length; i++) {
      if (platformList[i] !== leaderboardPlatform) {
        document.getElementById(platformList[i]).style.backgroundColor =
          "black";
      }
    }
    document.getElementById(platform).style.backgroundColor = "#F05742";
  }

  const [leaderboardPlatform, setLeaderboardPlatform] =
    useState("leaderboard-xbox");
  useEffect(() => {
    handlePlatformSelect(leaderboardPlatform);
  }, []);

  return (
    <div id="platform-carousel-container">
      <div
        class="platform-icon"
        id="leaderboard-xbox"
        onClick={() => handlePlatformSelect("leaderboard-xbox")}
      >
        <img src={iconXbox} alt="iconXbox" height={100} width={100} />
      </div>
      <div
        class="platform-icon"
        id="leaderboard-pc"
        onClick={() => handlePlatformSelect("leaderboard-pc")}
      >
        <img src={iconPc} alt="iconPc" height={100} width={100} />
      </div>
      <div
        class="platform-icon"
        id="leaderboard-playstation"
        onClick={() => handlePlatformSelect("leaderboard-playstation")}
      >
        <img
          src={iconPlaystation}
          alt="iconPlaystation"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}

export default PlatformCarousel;
