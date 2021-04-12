import React from "react";
import NavBar from "./NavBar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";
import "./PurchaseHistory.css";

const FDPurchases = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        <div>
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

          

          <h1>Food and Drinks Purchase History</h1>
          <div className="PH-Transaction">
            <div className="PH-container">Date: 3/23/2021</div>
            <div className="PH-container">Item and Quantity: 5 Hot Dogs</div>
            <div className="PH-container">Item and Quantity: 5 Large Sodas</div>
            <div className="PH-container">Item and Quantity: 5 Large Sodas</div>
            <div className="PH-container">Total Cost: $30.00</div>
          </div>

          <div className="PH-Transaction">
            <div className="PH-container">Date: 3/22/2021</div>
            <div className="PH-container">Item and Quantity: 3 Hot Dogs</div>
            <div className="PH-container">Item and Quantity: 2 Large Sodas</div>
            <div className="PH-container">Total Cost: $20.00</div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FDPurchases;
