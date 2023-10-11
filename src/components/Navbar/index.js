import React from "react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="left-allignment">
          <ul>
            <li><a href="/">Home</a> </li>
            <li><a href="/about">About</a> </li>
            <li><a href="/projects">Projects</a> </li>
            <li><a href="/skills">Skills</a> </li>
            <li><a href="/contact">Contact</a> </li>
          </ul>
        </div>
        <div className="right-allignment">More</div>
      </div>
    </nav>
  );
};
