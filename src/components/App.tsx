import GlobalStyle from "../styledComponents/GlobalStyles";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Route, Routes } from "react-router-dom";
import { Game } from "../pages/Game";
import { NavBar } from "./NavBar";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
