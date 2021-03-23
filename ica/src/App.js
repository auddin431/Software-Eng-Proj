import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MovieSelection from "./components/pages/MovieSelection";
import MoviePage from "./components/pages/MoviePage";
import FoodSelection from "./components/pages/FoodSelection";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import { CssBaseline } from '@material-ui/core';
import Checkout from "./components/pages/Checkout/Checkout";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import AccountHome from "./components/pages/AccountPage";
import PurchaseHistory from "./components/pages/PurchaseHistory";
import Settings from "./components/pages/Settings";
function App() {
  return (
    <div>
      <Route exact path="/SignIn" component={SignIn}></Route>
      <Route exact path="/SignUp" component={SignUp}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/MovieSelection" component={MovieSelection}></Route>
      <Route exact path="/MoviePage" component={MoviePage}></Route>
      <Route exact path="/FoodSelection" component={FoodSelection}></Route>
      <Route exact path="/Checkout" component={Checkout}></Route>
      <Route exact path="/Dashboard" component={Dashboard}></Route>
      <Route exact path="/AccountPage" component={AccountHome}></Route>
      <Route exact path="/PurchaseHistory" component={PurchaseHistory}></Route>
      <Route exact path="/Settings" component={Settings}></Route>
    </div>
  );
}

export default App;
