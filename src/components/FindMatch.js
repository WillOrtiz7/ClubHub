import React from "react";
import "../styles/Main.css";
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
      <h2 id="find-match-header">Find a Match</h2>
      <div id="find-match-carousel-table">
        <PlatformCarousel details={findMatchProps} />
      </div>
    </div>
  );
}

export default FindMatch;
