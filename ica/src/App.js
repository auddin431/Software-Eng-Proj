import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/pages/Home";
import MovieSelection from "./components/pages/MovieSelection";
import MoviePage from "./components/pages/MoviePage";
import FoodSelection from "./components/pages/FoodSelection";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import { CssBaseline } from "@material-ui/core";
import Checkout from "./components/pages/Checkout/Checkout";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import AccountHome from "./components/pages/AccountPage";


import SeatSelection from "./components/SeatSelection/SeatSelection";
import TicketPurchases from "./components/pages/TicketPurchases";
import FDPurchases from "./components/pages/FDPurchases";
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
      <Route exact path="/SeatSelection" component={SeatSelection}></Route>
      <Route exact path="/TicketPurchases" component={TicketPurchases}></Route>
      <Route exact path="/FDPurchases" component={FDPurchases}></Route>
    </div>
  );
}

export default App;
