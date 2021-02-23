//type rafce + tab to get basic structure
import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';


const Hero = () => {
 const [isOpen, setIsOpen] = useState(false)
 
 const toggle = () => {
     setIsOpen(!isOpen)
 }

    return (
       <HeroContainer>
           <Navbar toggle={toggle} />
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

export default Hero;
