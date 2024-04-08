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

    @-webkit-keyframes skeleton-animation {
      0% {
        background: #313131;
      }
      100% {
        background: #4E4E4E;
      }
    }
    
    @keyframes skeleton-animation {
      0% {
        background: #313131;
      }
      100% {
        background: #4E4E4E;
      }
    }

    @-webkit-keyframes skeleton-animation-light {
      0% {
        background: #636363;
      }
      100% {
        background: #888888;
      }
    }
    
    @keyframes skeleton-animation-light {
      0% {
        background: #636363;
      }
      100% {
        background: #888888;
      }
    }

    @-webkit-keyframes track-dote-animation {
      0% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.1);
                transform: scale(1.1);
      }
      100% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }
    
    @keyframes track-dote-animation {
      0% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.3);
                transform: scale(1.3);
      }
      100% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
      }
    }
`;
