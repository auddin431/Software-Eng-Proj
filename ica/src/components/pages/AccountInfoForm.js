import React from "react";
import NavBar from "./NavBar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";
import "./AccountPage.css";
// link to AccountInformation.js

var name,email,password,phone,paymentMethod,paymentNum,paymentExpDate,rewardsPoints;
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
      {/* NavBar*/}
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

          {/* Account Information Form*/}
          <h1>Account Home</h1>
          <div className="AP-box">
          <form action="/AccountPage">
          <div className="APF-container">  
          <label for="fname">Name:</label>
          <input type="text" id="name" name="name" placeholder={name}></input> 
          </div>
          <div className="APF-container">  
          <label for="fname">Email:</label>
          <input type="text" id="email" name="email" placeholder={email}></input>
          </div>
          <div className="APF-container">  
          <label for="fname">Password:</label>
          <input type="text" id="password" name="password" placeholder={password}></input>
          </div>
          <div className="APF-container">  
          <label for="fname">Phone:</label>
          <input type="text" id="phone" name="phone" placeholder={phone}></input>
          </div>
          <div className="APF-container">  
          <label for="fname">Payment Method:</label>
          <input type="text" id="paymentMethod" name="paymentMethod" placeholder={paymentMethod}></input>
          </div>
          <div className="APF-container">  
          <label for="fname">Card Number:</label>
          <input type="text" id="paymentNum" name="paymentNum" placeholder={paymentNum}></input>
          </div>
          <div className="APF-container">  
          <label for="fname">Expiration Date:</label>
          <input type="text" id="paymentExpDate" name="paymentExpDate" placeholder={paymentExpDate}></input>
          </div>
          <div className="APF-container">  
          <label for="fname">Rewards Points:</label>
          <input type="text" id="rewardsPoints" name="rewardsPoints" placeholder={rewardsPoints}></input>
          </div>
          <input type="submit" className="APF-Submit" value="Submit"></input>
          </form>
          
          </div>
            </div>
      </div>
    </>
  );
};






export default AccountHome;