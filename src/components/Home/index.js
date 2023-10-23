import Wendy_Profile from "./Wendy_Profile.jpg";
import "./home.css";
import React from "react";

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home of SWE.</h1>
        <img src={Wendy_Profile} alt="logo" className="logo" />  
        <br></br>
            
        <p> We Learn great ways to code Everyday.</p>
        <br></br>

        <ol></ol>
      </header>

      <ul></ul>
    </div>
  );
};
