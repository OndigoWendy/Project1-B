import './projects.css';
import React from "react";

export const Projects = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Projects</h1>
        <ol>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
        </ol>

        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my Github Profile.
        </a>
      </header>
      
      <ul></ul>
    </div>
  );
}

