import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieSelection from "./pages/MovieSelection";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/MovieSelection" component={MovieSelection}></Route>
    </div>
  );
}

export default App;
