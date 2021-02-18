import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiPopcorn } from 'react-icons/gi'; 


export const Nav = styled.nav`
    background: #383838;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

//change this to look like current NavBar
//change color to white if text in NavBar no longer Cyan
export const NavLogo = styled.div`
font-size: 2rem;
display: block;
position: absolute;
top: 0;
left: 0;
cursor: pointer;
color: #00FFFF;
transform: translate(50%, 15%)

`;

//margin used to space out the words in NavBar
export const NavLink = styled(Link)`
    margin: 0 2rem;
    color: #00FFFF;
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    font-weight: 100;

    @media screen and (max-width: 400px) {
        position absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #00FFFF;;

 p {
     transform: translate(-175%, 100%);
     font-weight: bold;
 }
`;

//FaPizzaSlice is from react icons. look up other ones to play with this
//have to import this
export const Bars = styled(GiPopcorn)`
 font-size: 2rem;
 transform: translate(-50%, -15%);
`;
