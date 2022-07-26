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

// TODO: consider replacing style only instead of returning different components.
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
      return <DefaultSpan data-testid="letter" key={i}>{char}</DefaultSpan>;
    }
    if (props.userInput[i] == char) {
      return <CorrectSpan data-testid="letter" key={i}>{char}</CorrectSpan>;
    }
    return <IncorrectSpan data-testid="letter" key={i}>{char}</IncorrectSpan>;
  });

  return <StyledBox data-testid="quote-box" onClick={props.onQuoteClick}>{chars}</StyledBox>;
};
