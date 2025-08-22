import React from "react";

export default function Cinecarousal() {
  return (
    <div className="container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item data-bs-interval=100 data-bs-pause=hover active">
            <img src="../src/assets/image1.jpg" className="d-block w-100" />
            <div className="carousel-caption ">
              <p>
                "Discover, rate, and help parents decide what’s worth watching."
              </p>
            </div>
          </div>
          <div className="carousel-item data-bs-interval=100 data-bs-pause=hover">
            <img src="../src/assets/image2.jpg" className="d-block w-100" />
            <div className="carousel-caption ">
              <p>
                "Your ratings guide others to the best — and safest — movie
                choices."
              </p>
            </div>
          </div>
          <div className="carousel-item data-bs-interval=100 data-bs-pause=hover">
            <img src="../src/assets/image3.png" className="d-block w-100" />
            <div className="carousel-caption ">
              <p>
                "Rate movies, share opinions, and help families choose the right
                films."
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev button-custom"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
