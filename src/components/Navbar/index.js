import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="left-allignment">
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/projects">Projects</Link> </li>
            <li><Link to="/skills">Skills</Link> </li>
            <li><Link to="/contact">Contact</Link> </li>
          </ul>
        </div>
        <div className="right-allignment">More</div>
      </div>
    </nav>
  );
};
