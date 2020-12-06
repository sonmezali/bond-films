import React from "react";
import {  Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {


  return (
    <div className=" nvb sticky">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <div className="col  p-2 pl-3 text-white" >
          <Link to="/">Movies</Link>
          </div>
          <div className="col  p-2 pl-3 text-white" >
          <Link to="/favorites">Favorites</Link>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};
export default Navbar;
