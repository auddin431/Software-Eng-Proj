import React from 'react';
import { Nav, NavLogo, NavLink, NavIcon, Bars } from './NavbarElements';

//This was one Navbar, originally made for the Food Ordering page, but the team decided on a different and universal Navbar to use

//onClick={toggle} means when person clicks on icon, it will use that function, which brings up sidebar
const Navbar = ( {toggle} ) => {
    return (
        <>
            <Nav >
                <NavLogo to='/'>ICA</NavLogo>
                <NavLink to='/'>Movies</NavLink>
                <NavLink to='/'>Dine-In Menu</NavLink>
                <NavLink to='/'>My Tickets</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;
