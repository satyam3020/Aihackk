import React from "react";
import "./Navbar.css"; 

const Navbar = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span>HIKVISION</span>
      </div>
      <div className="navbar-menu">
        <a
          href="#liveview"
          className={activeMenu === "Live View" ? "active" : ""}
          onClick={() => setActiveMenu("Live View")}
        >
          Live View
        </a>
        <a
          href="#playback"
          className={activeMenu === "Playback" ? "active" : ""}
          onClick={() => setActiveMenu("Playback")}
        >
          Playback
        </a>
      </div>
      <div className="navbar-user">
        <span>admin</span>
        <a href="#logout">Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
