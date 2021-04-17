import React from "react";
import NavBar from "./NavBar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";
import "./AccountPage.css";
// link to AccountInformation.js

var name,email,password,phone,paymentMethod,paymentNum,paymentLastNums,paymentExpDate,rewardsPoints;
name = "Shawn Muller";
email = "Shwnmuller@gmail.com";
password = "Random Password";
phone = "908-222-3333";
paymentMethod = "Discover";
paymentNum = "1111 2222 3333 5678";
paymentExpDate = "06/23";
rewardsPoints = 50;

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
          <div className="AP-Name"><h3>{name}</h3></div>
          <div className="AP-container">Email: {email}</div>
          <div className="AP-container">Password: **********</div>
          <div className="AP-container">Phone: {phone}</div>
          <div className="AP-container">Payment Method: {paymentMethod}: **** **** **** {paymentLastNums} Exp: {paymentExpDate}</div>
          <div className="AP-container">Rewards Points: {rewardsPoints}pts</div>
          <div className="APE-container"><Nav.Link href="/AccountInfoForm"><h3>Edit</h3></Nav.Link></div>
          </div>
            </div>
      </div>
    </>
  );
};





export default AccountHome;