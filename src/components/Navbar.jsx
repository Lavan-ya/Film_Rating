import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="container">
        <div className="navbar navbar-expand-sm bg-custom fixed-top">
          <div className="container-fluid d-flex justify-content-between">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img className="rounded-pill me-3" src="./assets/react.svg" />
              FILM RATING
            </a>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Addnewfilm" className="nav-link">
                  Addnewfilm
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Filmlisting" className="nav-link">
                  Filmlisting
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
