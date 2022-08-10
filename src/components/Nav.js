import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import "../styles/Main.css";
import ProfileDropdown from "./ProfileDropdown";

function Nav(props) {
  const { user } = UserAuth();
  // Detects if the nav is being rendered from the main page or not
  // We want to redirect user to main page when clicking any nav link from a non main page
  const redirectToMainPage = props.source === "not-main-page" ? true : false;

  return (
    <div className="nav">
      <div className="nav-links">
        <div className="nav-link">
          {redirectToMainPage ? (
            <Link to="/">Home</Link>
          ) : (
            <ScrollIntoView selector="#home">Home</ScrollIntoView>
          )}
        </div>
        <div className="nav-link">
          {redirectToMainPage ? (
            <Link to="/">Club Leaderboard</Link>
          ) : (
            <ScrollIntoView selector="#club-leaderboard">
              Club Leaderboard
            </ScrollIntoView>
          )}
        </div>
        <div className="nav-link">
          {redirectToMainPage ? (
            <Link to="/">Find a match</Link>
          ) : (
            <ScrollIntoView selector="#find-match">Find a match</ScrollIntoView>
          )}
        </div>
        {user ? (
          <ProfileDropdown />
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
