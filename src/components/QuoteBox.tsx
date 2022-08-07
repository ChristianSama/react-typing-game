import styled from "styled-components";
import { StyledBox } from "../styledComponents/StyledBox";

const DefaultSpan = styled.span`
  position: relative;
  color: #cccccc;
`;
const CorrectSpan = styled(DefaultSpan)`
  color: #404040;
`;
const IncorrectSpan = styled(DefaultSpan)`
  color: red;
  text-decoration: underline;
`;
const Cursor = styled.span`
  display: inline-block;
  position: absolute;
  left: -3px;
  width: 3px;
  height: 1.2rem;
  background-color: #76ffef;
`;

export const QuoteBox = (props: {
  quote: string;
  userInput: string;
  onQuoteClick: () => void;
}) => {
  let chars;

  chars = props.quote.split("").map((char, i) => {
    if (props.userInput.length === i) {
      return (
        <DefaultSpan key={i}>
          <Cursor />
          {char}
        </DefaultSpan>
      );
    }
    if (props.userInput[i] == undefined) {
      return <DefaultSpan key={i}>{char}</DefaultSpan>;
    }
    if (props.userInput[i] == char) {
      return <CorrectSpan key={i}>{char}</CorrectSpan>;
    }
    return <IncorrectSpan key={i}>{char}</IncorrectSpan>;
  });

  return <StyledBox onClick={props.onQuoteClick}>{chars}</StyledBox>;
};
