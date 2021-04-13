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
import ManageMovies from "./components/pages/ManageMovies";
import AuthUser from "./AuthUser";

function App() {
  return (
    <div>
      <Route exact path="/SignIn" component={SignIn}></Route>
      <Route exact path="/SignUp" component={SignUp}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/MovieSelection" component={AuthUser(MovieSelection)}></Route>
      <Route exact path="/MoviePage" component={MoviePage}></Route>
      <Route exact path="/FoodSelection" component={AuthUser(FoodSelection)}></Route>
      <Route exact path="/Checkout" component={AuthUser(Checkout)}></Route>
      <Route exact path="/Dashboard" component={AuthUser(Dashboard)}></Route>
      <Route exact path="/AccountPage" component={AuthUser(AccountHome)}></Route>
      <Route exact path="/SeatSelection" component={AuthUser(SeatSelection)}></Route>
      <Route exact path="/TicketPurchases" component={AuthUser(TicketPurchases)}></Route>
      <Route exact path="/FDPurchases" component={AuthUser(FDPurchases)}></Route>
      <Route exact path="/ManageMovies" component={AuthUser(ManageMovies)}></Route>
    </div>
  );
}

export default App;
