import Wendy_Profile from './Wendy_Profile.jpg';
import './home.css';
import React from "react";

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <br></br>
        <img src={Wendy_Profile} alt="logo" className='logo'/>
        <p> My name is <b>Wendy Ondigo.</b>
          <br></br>
          I am a fun senior web developer at microsoft. I recently graduated from KU and Moringa School and have taken up a role of mentoring young software developers.
          To keep myself alive, I participate in our local church choir and occassional walks at Karura forest.
          <br></br>
          Let's connect!
        </p>
        <br></br>

        <a
          className="App-link"
          href="https://github.com/OndigoWendy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my Github Profile.
        </a>
        <ol>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ol>
      </header>
      
      <ul></ul>
    </div>
  );
}

