import { createGlobalStyle } from 'styled-components';

//to align old NavBar however we aren't using it anymore so this file can be disregarded. We kept it in case we decide to revert to a different Navbar
export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin:0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
    }
`;