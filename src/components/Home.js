import React from "react";
import "../styles/Main.css";
import "../styles/Home.css";
import avatarHome from "../assets/avatar-home.png";

function Home() {
  return (
    <div className="standard-clubhub-page-body">
      <h1 className="standard-clubhub-page-header">Home</h1>
      <div id="home-content">
        <h2 id="home-content-title">What is ClubHub?</h2>
        <p id="home-content-body">
          ClubHub is an application made for FIFA Pro Club players across all
          platforms. Our objective is to provide clubs with the resources to
          setup custom matches against other clubs in their skill range and also
          provide an accurate assessment of a clubs true skill rating.
        </p>
        <img src={avatarHome} alt="Avatar home" height={350} width={250} />
      </div>
    </div>
  );
}

export default Home;
