import React, { useEffect, useRef, useState } from "react";
import { QuoteBox } from "./QuoteBox";
import { getQuote } from "../services/QuoteService";
import { Results } from "./Results";
import { QuoteData } from "../types/Quote";

const App = () => {
  const [quote, setQuote] = useState<QuoteData>({quote: "", anime: "", character: "", characterUrl: "", characterImage: ""});
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getQuote();
      setQuote(result);
    };
    fetchData();
    console.log(quote);
  }, []);

  const onUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <QuoteBox quote={quote.quote} userInput={userInput}></QuoteBox>
      <input type="text" value={userInput} onChange={onUserInput}></input>
      {/* {userInput == quote.quote && <Results quote={quote}></Results>} */}
      <Results quote={quote}></Results>
    </div>
  );
};

export default App;
