import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "StratosSkyeng";
        src: local("StratosSkyeng"), local("StratosSkyeng"),
        url("../fonts/StratosSkyeng.woff2") format("woff2"),
        url("../fonts/StratosSkyeng.woff") format("woff");
        font-weight: 400;
        font-style: normal;
    }

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
    
    a,
    a:visited {
        text-decoration: none;
        font-family: "StratosSkyeng", sans-serif;
        cursor: pointer;
    }
    
    button,
    ._btn {
        cursor: pointer;
    }
    
    ul li {
        list-style: none;
    }
    
    html,
    body {
        width: 100%;
        height: 100%;
        font-family: "StratosSkyeng", sans-serif;
        color: #ffffff;
    }

    .col01 {
        width: 447px;
        }
        
    .col02 {
        width: 321px;
    }
        
    .col03 {
        width: 245px;
    }
        
    .col04 {
        width: 60px;
        text-align: end;
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

    ._btn-icon:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }

    ._btn-icon:active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
      
    ._btn-icon:active {
        fill: #696969;
        stroke: #ffffff;
        cursor: pointer;
    }
`;
