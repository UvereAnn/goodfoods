import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Good Foos Logo" />
      <img className="profile" src={assets.profile_image} alt="Profile Image" />
    </div>
  );
};

export default Navbar;
