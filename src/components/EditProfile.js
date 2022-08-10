import React from "react";
import Nav from "./Nav";
import "../styles/Main.css";

export default function EditProfile() {
  return (
    <div>
      <div className="nav-container">
        <Nav source="not-main-page" />
      </div>
      <div className="standard-clubhub-page-container">
        <div className="standard-clubhub-page-body">
          <h1 className="standard-clubhub-page-header">Edit Profile</h1>
        </div>
      </div>
    </div>
  );
}
