import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    max-width: 1700px;
}

@font-face {
    font-family: 'Helvetica';
    src: local('FreeSans'), url(../fonts/Free-Sans/FreeSans.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Helvetica-bold';
    src: local('FreeSansBold'), url(../fonts/Free-Sans/FreeSansBold.ttf) format('truetype');
  }
`