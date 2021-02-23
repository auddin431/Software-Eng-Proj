//type rafce + tab to get basic structure
import React, {useState} from 'react';
import NavBar from "../pages/NavBar";
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';


export default function Hero(){
 const [isOpen, setIsOpen] = useState(false)
 
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
                   <HeroBtn  onClick={toggle}>Open Menu</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    );
};


