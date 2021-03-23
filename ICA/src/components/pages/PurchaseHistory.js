import React from "react";
import NavBar from "./NavBar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";
import "./AccountPage.css";

const PurchaseHistory = () => {
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
                    <Nav.Link href="/PurchaseHistory">Purchase History</Nav.Link>
                    <Nav.Link href="/Settings">Settings</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
          <h1>Purchase History</h1>
          
            </div>
      </div>
    </>
  );
};

export default PurchaseHistory;