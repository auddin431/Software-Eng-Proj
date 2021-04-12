import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../App.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">ICA</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-auto">
          <Nav.Link href="/MovieSelection">Movies</Nav.Link>
          <Nav.Link href="/FoodSelection">Dine-In Menu</Nav.Link>
          <Nav.Link href="/AccountPage">My Tickets</Nav.Link>
          <Nav.Link href="/ManageMovies">Manage Movies</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="/SignUp">
            My Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
