import { createGlobalStyle } from "styled-components";
import sizes from "../theme/sizes";
import colors from "../theme/colors";


export const GlobalStyle =  createGlobalStyle`
    * {
        margin: ${sizes.none};
        padding: ${sizes.none};
        box-sizing: border-box;
        background-color: ${colors.light};

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

