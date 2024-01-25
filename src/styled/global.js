import { createGlobalStyle } from "styled-components";
import sizes from "../theme/sizes";


export const GlobalStyle =  createGlobalStyle`
    * {
        margin: ${sizes.none};
        padding: ${sizes.none};
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    body, input, textarea, button {
        font-family: 'Roboto';
        font-weight: 400;
        --webkit-font-smoothing: antialiased;
    }
`

