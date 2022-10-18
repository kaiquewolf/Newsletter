import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    max-width: 1700px;
    font-family: Helvetica, serif;
    color: #888888;
}

@font-face {
    font-family: 'Helvetica';
    src: local('FreeSans'), url('../fonts/Free-Sans/FreeSans.ttf') format('truetype'), url('../fonts/Free-Sans/FreeSansBold.ttf') format ('truetype'); 
  };
  `