import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Themes";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    @import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");
    font-family: "Inconsolata", monospace;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.foreground};
  }
`;

export default GlobalStyle;
