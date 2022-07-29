import React from "react";
import { useState, useEffect } from "react";
import iconPc from "../assets/icon-pc.png";
import iconPlaystation from "../assets/icon-playstation.png";
import iconXbox from "../assets/icon-xbox.png";
import avatarClubLeaderboard from "../assets/avatar-club-leaderboard.png";
import avatarFindMatch from "../assets/avatar-find-match.png";
import StickyHeadTable from "./StickyHeadTable";

let leaderboardPlatformList = [
  "leaderboard-xbox",
  "leaderboard-pc",
  "leaderboard-playstation",
];
let findMatchPlatformList = [
  "find-match-xbox",
  "find-match-pc",
  "find-match-playstation",
];
function PlatformCarousel(props) {
  // Tell whether we are rendering leaderboard or find match
  let root = props.details.root;

  // Set avatar image based on props
  let avatar =
    props.details.avatar === "avatarClubLeaderboard"
      ? avatarClubLeaderboard
      : avatarFindMatch;

  // Get the id names for each icon
  let xboxIcon = props.details.iconXbox;
  let pcIcon = props.details.iconPc;
  let playstationIcon = props.details.iconPlaystation;

  // Change which platform is highlighted for leaderboard
  function handleLeaderboardPlatformSelect() {
    for (let i = 0; i < leaderboardPlatformList.length; i++) {
      if (leaderboardPlatformList[i] !== leaderboardPlatform) {
        document.getElementById(
          leaderboardPlatformList[i]
        ).style.backgroundColor = "black";
      }
    }
    document.getElementById(leaderboardPlatform).style.backgroundColor =
      "#F05742";
  }

  // Change which platform is highlighted for find match
  function handleFindMatchPlatformSelect() {
    for (let i = 0; i < findMatchPlatformList.length; i++) {
      if (findMatchPlatformList[i] !== findMatchPlatform) {
        document.getElementById(
          findMatchPlatformList[i]
        ).style.backgroundColor = "black";
      }
    }
    document.getElementById(findMatchPlatform).style.backgroundColor =
      "#F05742";
  }

  // Track the state of which platform is selected for both leaderboard and find match components
  const [leaderboardPlatform, setLeaderboardPlatform] =
    useState("leaderboard-xbox");
  const [findMatchPlatform, setFindMatchPlatform] = useState("find-match-xbox");

  // Re-render component when new platform is selected
  useEffect(() => {
    // Change which platform is highlighted for appropriate component
    if (root === "leaderboard") {
      handleLeaderboardPlatformSelect();
    } else {
      handleFindMatchPlatformSelect();
    }
  }, [leaderboardPlatform, findMatchPlatform]);

  // Decide leaderboard to display when StickyHeadTable is called
  let tableRender =
    root === "leaderboard" ? leaderboardPlatform : findMatchPlatform;
  console.log("Table render: ", tableRender);

  return (
    <div className="carousel-and-leaderboard">
      <div className="platform-carousel-container">
        <div
          className="platform-icon"
          id={xboxIcon}
          onClick={
            root === "leaderboard"
              ? () => setLeaderboardPlatform(xboxIcon)
              : () => setFindMatchPlatform(xboxIcon)
          }
        >
          <img src={iconXbox} alt="iconXbox" height={100} width={100} />
        </div>
        <div
          className="platform-icon"
          id={pcIcon}
          onClick={
            root === "leaderboard"
              ? () => setLeaderboardPlatform(pcIcon)
              : () => setFindMatchPlatform(pcIcon)
          }
        >
          <img src={iconPc} alt="iconPc" height={100} width={100} />
        </div>
        <div
          className="platform-icon"
          id={playstationIcon}
          onClick={
            root === "leaderboard"
              ? () => setLeaderboardPlatform(playstationIcon)
              : () => setFindMatchPlatform(playstationIcon)
          }
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
          src={avatar}
          alt="Avatar club leaderboard"
          height={350}
          width={250}
        />
        <div id="club-leaderboard-table">
          <StickyHeadTable platform={tableRender} root={root} />
        </div>
      </div>
    </div>
  );
}

export default PlatformCarousel;
