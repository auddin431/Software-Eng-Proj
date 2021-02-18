import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'; 

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
                <SidebarLink to="/">Appetizers</SidebarLink>
                <SidebarLink to="/">Entrees</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
