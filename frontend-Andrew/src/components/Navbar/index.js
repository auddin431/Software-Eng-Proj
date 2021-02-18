import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

//onClick={toggle} means when person clicks on icon, it will use that function, which brings up sidebar
const Navbar = ( {toggle} ) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Food Selection</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;

//could have called this Navbar.js if I wanted