import React from "react";
import NavBar from "./NavBar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";
import "./PurchaseHistory.css";
import QRCode from 'qrcode-react';
import {dataline} from './TicketPurchaseElements'
// link to AccountInformation.js

export default function TicketPurchases() {

  const purchase = [
    {
      date: "2021-04-22",
      movie: "Movie 1",
      quantity: 1,
      id: "12345"
    },
    {
      date: "2021-04-23",
      movie: "Movie 2",
      quantity: 2,
      id: "23456"
    },
    {
      date: "2021-04-24",
      movie: "Movie 3",
      quantity: 3,
      id: "34567"
    },
    {
      date: "2021-04-25",
      movie: "Movie 4",
      quantity: 4,
      id: "https://cdn.discordapp.com/attachments/823649533245521950/834945488444194836/Croco2.png"
    }
]

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
            <div>
            {purchase.map((purchase,index) => (
                <div className="PH-Transaction">
                <dataline> 
                DATE: {purchase.date}   |
                    MOVIE: {purchase.movie}   | 
                    QUANTITY: {purchase.quantity}
                </dataline>
                <QRCode value={purchase.id} size='250' logo='https://cdn.discordapp.com/attachments/823649533245521950/834945488444194836/Croco2.png' logoWidth="85"/>
                </div>
            ))}
            </div>

        </div>
      </div>
    </>
  );
};

