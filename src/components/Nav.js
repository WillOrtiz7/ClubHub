import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import "../styles/Main.css";
import ProfileDropdown from "./ProfileDropdown";

function Nav() {
  const { user, logout } = UserAuth();
  console.log(user);

  async function handleLogout() {
    try {
      await logout;
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div id="nav">
      <div id="nav-links">
        <div className="nav-link">
          <ScrollIntoView selector="#home">Home</ScrollIntoView>
        </div>
        <div className="nav-link">
          <ScrollIntoView selector="#club-leaderboard">
            Club Leaderboard
          </ScrollIntoView>
        </div>
        <div className="nav-link">
          <ScrollIntoView selector="#find-match">Find a match</ScrollIntoView>
        </div>
        {user ? (
          <ProfileDropdown user={user} handleLogout={handleLogout} />
        ) : (
          <div className="nav-link">
            <Link to="/signin">Sign in</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
