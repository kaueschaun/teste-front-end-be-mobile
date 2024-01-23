import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        --webkit-font-smoothing: antialiased;
    }
`

