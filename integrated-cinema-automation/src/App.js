import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default App;
