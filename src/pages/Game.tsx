import React, { useEffect, useRef, useState } from "react";
import { QuoteData } from "../types/Quote";
import { getQuote } from "../services/QuoteService";
import { QuoteBox } from "../components/QuoteBox";
import { Results } from "../components/Results";
import styled from "styled-components";

const HiddenInput = styled.input.attrs({
  type: "text"
})`
  opacity: 0;
  filter: alpha(opacity=0);
`

export const Game = () => {
  const [quote, setQuote] = useState<QuoteData>({
    quote: "",
    anime: "",
    character: "",
    characterUrl: "",
    characterImage: "",
  });
  const [userInput, setUserInput] = useState("");

  const hiddenInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getQuote();
      setQuote(result);
    };
    fetchData();
  }, []);

  const onQuoteClick = () => {
    const currentEl = hiddenInput.current;
    if (currentEl) {
      hiddenInput.current.focus();
    }
  }

  const onUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <QuoteBox onQuoteClick={onQuoteClick} quote={quote.quote} userInput={userInput}></QuoteBox>
      <HiddenInput type="text" ref={hiddenInput} value={userInput} onChange={onUserInput}></HiddenInput>
      {userInput == quote.quote && quote.quote != "" && (
        <Results quote={quote}></Results>
      )}
    </div>
  );
};
