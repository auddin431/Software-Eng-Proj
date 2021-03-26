import styled from 'styled-components';
import ImgBg from '../../images/popcornBg.jpg'

//Element files are for styling
//ImgBg is Image Background. Could have called it whatever like taco
export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) /2);
`;

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

//clamp helps keep font size scaled with different devices
export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 10px 15px #e9ba23;
    letter-spacing: 3px;
`;

export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
    
`;

//hover changes color of button when cursor hovers over it
//transistion is for when color of button changes. for the one in hover, it is for when cursor moves to button
//the other is when cursor moves off button
//current button doesn't change size when window is smaller. could make the text do it but idk if worth it
export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;