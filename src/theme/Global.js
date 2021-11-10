import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    html, * {
        box-sizing: border-box;
       
    }
`;
