import React, { useEffect, useRef, useState } from "react";
import { QuoteData } from "../types/Quote";
import { getQuote } from "../services/QuoteService";
import { QuoteBox } from "../components/QuoteBox";
import { Results } from "../components/Results";
import styled from "styled-components";
import { NewGameButton } from "../components/NewGameButton";
import { secondsToTime } from "../helpers/helpers";

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

const Timer = styled.div`
  text-align: center;
  font-size: 30px;
  margin-top: 4rem;
`

export const Game = () => {
  const [quote, setQuote] = useState<QuoteData>(initialQuote);
  const [userInput, setUserInput] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerID, setTimerID] = useState(null);

  const firstGameStartRender = useRef(true);
  const hiddenInput = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    fetchData();
  }, []); //when mounting the component

  useEffect(() => {
    if (quote.quote === userInput && gameStarted) {
      setGameOver(true);
      clearInterval(timerID);
    }
  }, [userInput]) //on userInput change

  useEffect(() => {
    if (firstGameStartRender.current) {
      firstGameStartRender.current = false;
      return;
    }
    if (gameStarted === true) {
      setTimerID(window.setInterval(() => tick(), 1000))
    }
  }, [gameStarted]) //on gameStarted change

  const fetchData = async () => {
    const result = await getQuote();
    setQuote(result);
    setGameStarted(true);
  };

  const onQuoteClick = () => {
    hiddenInput.current.focus();
  };

  const onUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!gameOver) {
      setUserInput(e.target.value);
    }
  };

  const tick = () => {
    setTimer(timer => timer + 1)
  }

  const newGame = async () => {
    setQuote(initialQuote);
    clearInterval(timerID);
    setTimer(0);
    setGameStarted(false);
    setUserInput("");
    setGameOver(false);
    await fetchData();
    hiddenInput.current.focus();
  }

  return (
    <Container>
      <Timer>{secondsToTime(timer)}</Timer>
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
          <Results quote={quote} timer={timer}></Results>
        </>
      )}
      <NewGameButton newGame={newGame}></NewGameButton>
    </Container>
  );
};
