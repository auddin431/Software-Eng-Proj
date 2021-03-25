import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'; 
import {Link} from 'react-scroll';

//to="/" inside the quotations, would have to make own links to go to other pages
//add onClick={toggle} if want to click on the whole sidebar to close it
//currently, only clicking on the 'x' icon let's that happen
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
