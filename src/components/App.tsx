import GlobalStyle from "../styledComponents/GlobalStyles";
import { QuoteBox } from "./QuoteBox";
import { Results } from "./Results";
import { Home } from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import { Game } from "../pages/Game";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
