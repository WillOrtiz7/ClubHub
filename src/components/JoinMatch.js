import React from "react";
import { useState, useEffect } from "react";

function JoinMatch(props) {
  console.log("Button props", props.opponent);
  function handleClick() {}
  const [opponentTeam, setOpponentTeam] = useState("No opponent");
  useEffect(() => {
    handleClick();
  }, [opponentTeam, props.platform]);
  console.log("Button state: ", opponentTeam);
  return (
    <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-b6pfe9-MuiTableCell-root">
      {opponentTeam === "No opponent" ? (
        <button
          className="join-match-button"
          onClick={() => setOpponentTeam(props.opponent)}
        >
          Join Match
        </button>
      ) : (
        <div className="leave-match-container">
          <div className="find-match-opponent-team-name">Wesley Bosco</div>
          <button
            className="leave-match-button"
            onClick={() => setOpponentTeam("No opponent")}
          >
            Leave Match
          </button>
        </div>
      )}
    </td>
  );
}

export default JoinMatch;
