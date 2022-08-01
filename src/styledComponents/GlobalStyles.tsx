import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");
    font-family: "Inconsolata", monospace;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
