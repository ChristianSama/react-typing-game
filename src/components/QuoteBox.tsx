import styled from "styled-components";
import { StyledBox } from "../styledComponents/StyledBox";

const GreenSpan = styled.span`
  background-color: #9dffe8;
`;
const RedSpan = styled.span`
  background-color: red;
`;

export const QuoteBox = (props: { quote: string; userInput: string }) => {
  let chars;

  chars = props.quote.split("").map((char, i) => {
    if (props.userInput[i] == undefined) {
      return <span key={i}>{char}</span>;
    }
    if (props.userInput[i] == char) {
      return <GreenSpan key={i}>{char}</GreenSpan>;
    }
    return <RedSpan key={i}>{char}</RedSpan>;
  });

  return <StyledBox>{chars}</StyledBox>;
};
