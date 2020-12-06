import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
    return (
    <div>
      <div className="sidebar bg-light text-left">
        <div className="sidebar-wp">
 
          <div className="col border p-2 pl-3">  
          <Link to="/">Movies</Link>
          </div>
      
        <div className="col border p-2 pl-3" >
        <Link to="/favorites">Favorites</Link>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default SideBar;
