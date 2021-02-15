import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Integrated Cinema Automation</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-auto">
          <Nav.Link href="#movies">Movies</Nav.Link>
          <Nav.Link href="#menu">Dine-In Menu</Nav.Link>
          <Nav.Link href="#tickets">My Tickets</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#account">
            My Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
