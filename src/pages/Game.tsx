import React, { useEffect, useRef, useState } from "react";
import { QuoteData } from "../types/Quote";
import { getQuote } from "../services/QuoteService";
import { QuoteBox } from "../components/QuoteBox";
import { Results } from "../components/Results";
import styled from "styled-components";
import { NewGameButton } from "../components/NewGameButton";

const HiddenInput = styled.input.attrs({
  type: "text",
})`
  opacity: 0;
  filter: alpha(opacity=0);
`;

const initialQuote = {
  quote: "",
  anime: "",
  character: "",
  characterUrl: "",
  characterImage: "",
}

const LoadingPrompt = styled.p`
  font-size: 20px;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Game = () => {
  const [quote, setQuote] = useState<QuoteData>(initialQuote);
  const [userInput, setUserInput] = useState("");

  const hiddenInput = useRef<HTMLInputElement>(null);

  const fetchData = async () => {
    const result = await getQuote();
    setQuote(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onQuoteClick = () => {
    hiddenInput.current.focus();
  };

  const onUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const newGame = async () => {
    setQuote(initialQuote);
    setUserInput("");
    await fetchData();
    hiddenInput.current.focus();
  }

  return (
    <Container>
      {quote.quote !== "" 
        ? <QuoteBox
          onQuoteClick={onQuoteClick}
          quote={quote.quote}
          userInput={userInput}
        ></QuoteBox>
        : <LoadingPrompt>Loading...</LoadingPrompt>
      }
      <HiddenInput
        type="text"
        autoFocus
        ref={hiddenInput}
        value={userInput}
        onChange={onUserInput}
      ></HiddenInput>
      {userInput == quote.quote && quote.quote != "" && (
        <>
          <Results quote={quote}></Results>
        </>
      )}
      <NewGameButton newGame={newGame}></NewGameButton>
    </Container>
  );
};
