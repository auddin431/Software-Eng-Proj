//type rafce + tab to get basic structure
import React, {useState} from 'react';
import NavBar from "../pages/NavBar";
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

//The Hero function is the top portion of the Food Ordering page. It contains the Navbar, Sidebar, and the text immediately seen when the page loads

export default function Hero(){

 //useState variable to open and close the Sidebar with the button that says "Open Sidebar"
 const [isOpen, setIsOpen] = useState(false)
 
 //this function allows the side bar to open and close when the button Open Sidebar is clicked by the moviegoer
 const toggle = () => {
     setIsOpen(!isOpen)
 }

    return (
       <HeroContainer>
           <NavBar />
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Greatest Hotdog Ever</HeroH1>
                   <HeroP>Ready in 60 seconds</HeroP>
                   <HeroBtn  onClick={toggle}>Open Sidebar</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    );
};


