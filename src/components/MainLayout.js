import React from "react";
import SideBar from "./SideBar";
import "./SideBar.css";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Navbar/>
      <div className="row">
        <div className="col col-2 col-sidebar">
          <SideBar />
        </div>
        <div className="col col-8 col-main-content">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
