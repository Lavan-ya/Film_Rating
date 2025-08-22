import "./Head.css";
import Cinecarousal from "./Cinecarousal";
import Navbar from "./Navbar";
import React from "react";

export default function Head() {
  return (
    <div>
      <Navbar />
      <div className="main p-5 m-4 text-center">
        <h1>Welcome to Film Rating!</h1>
        <span className="fw-bold">
          The Film Rating System lets you check the rating of any film and share
          your own review. Your input helps others — especially parents — decide
          whether a movie is worth watching and suitable for their children.
        </span>
        <Cinecarousal />
      </div>
    </div>
  );
}
