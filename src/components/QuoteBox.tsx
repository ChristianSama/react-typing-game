import styled from "styled-components";
import { StyledBox } from "../styledComponents/StyledBox";

const DefaultSpan = styled.span`
  position: relative;
  color: #cccccc;
`;
const GreenSpan = styled(DefaultSpan)`
  color: #404040;
`;
const RedSpan = styled(DefaultSpan)`
  color: red;
`;
const Cursor = styled(DefaultSpan)`
  display: inline-block;
  position: absolute;
  left: -3px;
  width: 3px;
  height: 1.2rem;
  background-color: #76ffef
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
      return <GreenSpan key={i}>{char}</GreenSpan>;
    }
    return <RedSpan key={i}>{char}</RedSpan>;
  });

  return <StyledBox onClick={props.onQuoteClick}>{chars}</StyledBox>;
};
