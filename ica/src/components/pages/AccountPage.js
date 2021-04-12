import React from "react";
import NavBar from "./NavBar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";
import "./AccountPage.css";

const AccountHome = () => {
  return (
    <>
      <NavBar />
      <div className="App">
          <div name="APHeader"> 
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ml-auto">
                    <Nav.Link href="/AccountPage">Account Home</Nav.Link>
                    <Nav.Link href="/TicketPurchases">Ticket Purchase History</Nav.Link>
                    <Nav.Link href="/FDPurchases">Food and Drinks Purchase History</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
          <h1>Account Home</h1>
          <div className="AP-box">
          <div className="AP-Name"><h3>Shawn Muller</h3></div>
          <div className="AP-container">Email: Shwnmuller@gmail.com</div>
          <div className="AP-container">Password: **********</div>
          <div className="AP-container">Phone: 908-222-3333</div>
          <div className="AP-container">Payment Method: Discover: **** **** **** 5678 Exp: 06/23</div>
          <div className="AP-container">Rewards Points: 50pts</div>
          <button className="editButton"><h3>Edit</h3></button>
          </div>
            </div>
      </div>
    </>
  );
};

export default AccountHome;