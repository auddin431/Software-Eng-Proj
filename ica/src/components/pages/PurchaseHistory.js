import React from "react";
import NavBar from "./NavBar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";
import "./PurchaseHistory.css";

const PurchaseHistory = () => {
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
                    <Nav.Link href="/PurchaseHistory">Purchase History</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            
          
          <h1>Purchase History</h1>
          <div className="PH-Transaction">
              <h3>Food/Drink Purchase</h3>
              <div className="PH-container">Date: 3/23/2021</div>
              <div className="PH-container">Item and Quantity: 5 Hot Dogs</div>
              <div className="PH-container">Item and Quantity: 5 Large Sodas</div>
              <div className="PH-container">Total Cost: $30.00</div>
          </div>
          
          <div className="PH-Transaction">
              <h3>Ticket Purchase</h3>
              <div className="PH-container">Date: 3/23/2021</div>
              <div className="PH-container">Movie: Avengers Endgame</div>
              <div className="PH-container">Number of Tickets: 10</div>
              <div className="PH-container">Total Cost: $100.00</div>
              <button className="QR-Code"><h3>QR Code</h3></button>
          </div>

          <div className="PH-Transaction">
              <h3>Food/Drink Purchase</h3>
              <div className="PH-container">Date: 3/22/2021</div>
              <div className="PH-container">Item and Quantity: 3 Hot Dogs</div>
              <div className="PH-container">Item and Quantity: 2 Large Sodas</div>
              <div className="PH-container">Total Cost: $20.00</div>
          </div>

          <div className="PH-Transaction">
              <h3>Ticket Purchase</h3>
              <div className="PH-container">Date: 3/22/2021</div>
              <div className="PH-container">Movie: Star Wars</div>
              <div className="PH-container">Number of Tickets: 3</div>
              <div className="PH-container">Total Cost: $35.00</div>
              <button className="QR-Code"><h3>QR Code</h3></button>
          </div>

          <div className="PH-Transaction">
              <h3>Ticket Purchase</h3>
              <div className="PH-container">Date: 3/22/2021</div>
              <div className="PH-container">Movie: Mad Max: Fury Road</div>
              <div className="PH-container">Number of Tickets: 1</div>
              <div className="PH-container">Total Cost: $11.00</div>
              <button className="QR-Code"><h3>QR Code</h3></button>
          </div>



          </div>
      </div>
    </>
  );
};

export default PurchaseHistory;