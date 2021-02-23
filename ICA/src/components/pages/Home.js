import React from "react";
import NavBar from "./NavBar";
import "../../App.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <h1>Home Page</h1>
          <p>This is the home page</p>
        </header>
      </div>
    </>
  );
};

export default Home;
