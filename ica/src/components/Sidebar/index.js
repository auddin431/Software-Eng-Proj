import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'; 
import {Link} from 'react-scroll';

//This function is for the Sidebar. The toggle function is passed in so that the 'X' can close the Sidebar
//'X' is a React Icon
//Link component used to scroll when Appetizer, Entree, Drink, and Dessert are clicked. They will scroll to their respective parts of the Menu
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink><Link  to="Appetizer" spy={true} smooth={true}>Appetizers</Link></SidebarLink>
                <SidebarLink><Link  to="Entree" spy={true} smooth={true}>Entrees</Link></SidebarLink>
                <SidebarLink><Link  to="Drink" spy={true} smooth={true}>Drinks</Link></SidebarLink>
                <SidebarLink><Link  to="Dessert" spy={true} smooth={true}>Desserts</Link></SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/Checkout" target="_blank">Checkout</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
