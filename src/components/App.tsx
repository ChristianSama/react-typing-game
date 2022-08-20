import GlobalStyle from "../styledComponents/GlobalStyles";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Route, Routes } from "react-router-dom";
import { Game } from "../pages/Game";
import { NavBar } from "./NavBar";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styledComponents/Themes";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback";

export const ThemeContext = React.createContext(lightTheme);

const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <>
          <NavBar toggleTheme={toggleTheme} />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </ErrorBoundary>
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
