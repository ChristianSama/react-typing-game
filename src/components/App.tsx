import React, { useEffect, useRef, useState } from 'react';
import { QuoteBox } from './QuoteBox';

const App = () => {
  const [quote, setQuote] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://animechan.vercel.app/api/random")
      .then(response => response.json())
      .then(quote => {
        setQuote(quote.quote);
      })
  }, [])

  const onUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }

  return (
    <div>
      <QuoteBox quote={quote} userInput={userInput}></QuoteBox>
      <input type="text" value={userInput} onChange={onUserInput}></input>
    </div>
  );
}

export default App;
