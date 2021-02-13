import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    html {
        box-sizing: border-box;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 100px 80px;
        font-family: 'Quicksand';
    }
    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Quicksand';
    }
    ul {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;