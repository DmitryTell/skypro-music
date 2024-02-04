import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        font-family: "StratosSkyeng", sans-serif;
        color: #fff;
    }

    a,
    a:visited {
        text-decoration: none;
        font-family: "StratosSkyeng", sans-serif;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }

    ul li {
        list-style: none;
    }

    img {
        display: block;
        height: auto;
        max-width: 100%;
    }

    @-webkit-keyframes button-animation {
      0% {
        background: #580ea2;
      }
      100% {
        background: #b22cff;
      }
    }
    
    @keyframes button-animation {
      0% {
        background: #580ea2;
      }
      100% {
        background: #b22cff;
      }
    }
`;
