import { useRef, useState } from "react";
import styled from "styled-components";

const StyledQuote = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
  font-family: "Inconsolata", monospace;
  font-size: 20px;
  width: 50%;
  margin: 3rem auto;
  border: solid #bababa 1px;
  padding: 1rem;
  color: gray;
  box-shadow: 10px 10px 10px #ffdaf6;
`
const GreenSpan = styled.span`
  background-color: #9dffe8;
`
const RedSpan = styled.span`
  background-color: red;
`

export const QuoteBox = (props: {quote: string, userInput:string}) => {

  let chars;

  chars = props.quote.split("").map((char, i) => {
    if (props.userInput[i] == undefined) {
      return (<span key={i}>{char}</span>);
    } 
    if (props.userInput[i] == char) {
      return (<GreenSpan key={i}>{char}</GreenSpan>);
    }
    return (<RedSpan key={i}>{char}</RedSpan>);
  });

  return (
    <StyledQuote>
      {chars}
    </StyledQuote>
  );
}
