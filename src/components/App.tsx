import React, { useEffect, useRef, useState } from 'react';
import { QuoteBox } from './QuoteBox';
import { getQuote } from '../services/QuoteService';

const App = () => {
  const [quote, setQuote] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getQuote()
      setQuote(result.quote);
    }
    fetchData();
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
