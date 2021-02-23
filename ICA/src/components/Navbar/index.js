import React from 'react';
import { Nav, NavLogo, NavLink, NavIcon, Bars } from './NavbarElements';

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

//could have called this Navbar.js if I wanted