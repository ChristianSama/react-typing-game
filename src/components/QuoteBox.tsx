import styled from "styled-components";

const StyledQuote = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
  font-family: "Inconsolata", monospace;
  width: 50%;
  margin: 3rem auto;
  border: solid #bababa 1px;
  padding: 1rem;
  color: gray;
  box-shadow: 10px 10px 10px #ffdaf6;
`

export const QuoteBox = (props: {quote: string, userInput:string}) => {

  let chars = props.quote.split("").map((char, i) => {
    if (props.userInput[i] == char) {
      return (<span style={{backgroundColor: "green"}} key={i}>{char}</span>)
    }
    return (<span key={i}>{char}</span>)
  });

  return (
    <StyledQuote>
      {chars}
    </StyledQuote>
  );
}