import React from "react";
import "../styles/FindMatch.css";
import PlatformCarousel from "./PlatformCarousel";

function FindMatch() {
  let findMatchProps = {
    root: "findMatch",
    platform: "",
    avatar: "avatarFindMatch",
    iconXbox: "find-match-xbox",
    iconPc: "find-match-pc",
    iconPlaystation: "find-match-playstation",
  };
  return (
    <div id="find-match-body">
      <h1 id="find-match-header">Find a Match</h1>
      <div id="find-match-carousel-table">
        <PlatformCarousel details={findMatchProps} />
      </div>
    </div>
  );
}

export default FindMatch;
