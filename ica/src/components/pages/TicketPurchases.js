import React from "react";
import NavBar from "./NavBar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";
import "./PurchaseHistory.css";
// link to AccountInformation.js

const TicketPurchases = () => {
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


          <h1>Ticket Purchase History</h1>
          
          
          <div className="PH-Transaction">
            <div className="PH-container">Date: 3/23/2021</div>
            <div className="PH-container">Movie: Avengers Endgame</div>
            <div className="PH-container">Number of Tickets: 10</div>
            <div className="PH-container">Total Cost: $100.00</div>
            <button className="QR-Code">
              <h3>QR Code</h3>
            </button>
          </div>

          <div className="PH-Transaction">
            <div className="PH-container">Date: 3/22/2021</div>
            <div className="PH-container">Movie: Star Wars</div>
            <div className="PH-container">Number of Tickets: 3</div>
            <div className="PH-container">Total Cost: $35.00</div>
            <button className="QR-Code">
              <h3>QR Code</h3>
            </button>
          </div>

          <div className="PH-Transaction">
            <div className="PH-container">Date: 3/22/2021</div>
            <div className="PH-container">Movie: Mad Max: Fury Road</div>
            <div className="PH-container">Number of Tickets: 1</div>
            <div className="PH-container">Total Cost: $11.00</div>
            <button className="QR-Code">
              <h3>QR Code</h3>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

// Event: A QR code button is clicked ==> Open QR Code 
    // Take the user to a new page with the QR Code

export default TicketPurchases;
