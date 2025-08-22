import Navbar from "./Navbar";
import React from "react";

export default function Addnewfilm() {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify content-center">
      <Navbar />
      <div className="m-5 p-5 flex-grow-1 ">
        <div className="row w-100">
          <div className="col-md-6 p-5 border rounded border-dark">
            <h2 className="mb-4">Add New Film</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="filmName" className="form-label">
                  Film Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="filmName"
                  placeholder="Enter the film name"
                ></input>
              </div>
              <div className="mb-4">
                <label htmlFor="rating" className="form-label">
                  Rating{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="rating"
                  placeholder="Rnter rating"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary">
                SUBMIT
              </button>
            </form>
          </div>
          <div className="col-lg-6 p-5 d-flex flex-column justify-content-center bg-white border">
            <h2 className="mb-3 text-primary">Welcome to Film Rating!</h2>
            <p className="lead">
              Share your opinion about the latest movies! Your rating helps
              others discover hidden gems and avoid letdowns. Add a film now and
              become part of a community that loves cinema!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
