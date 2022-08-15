import { StyledBox } from "../styledComponents/StyledBox";
import styled from "styled-components";
import { QuoteData } from "../types/Quote";

const ResultsBox = styled(StyledBox)`
  max-width: 30%;
`
const Image = styled.img`
  width: 25%;  
  margin: 1rem;
`
const SubResults = styled.div`
  display: flex;
`
const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Results = (props: { quote: QuoteData, timer: number}) => {
  const wpm = props.quote.quote.split(" ").length/(props.timer/60)
  return (
    <ResultsBox>
      <div>You just typed a quote from:</div>
      <SubResults>
        <Image src={props.quote.characterImage}></Image>
        <Stats>
          <div>Anime: {props.quote.anime}</div>
          <div>
            Character:
            <a href={props.quote.characterUrl}>{props.quote.character}</a>
          </div>
          <div>WPM: {Math.ceil(wpm)} </div>
        </Stats>
      </SubResults>
    </ResultsBox>
  );
};
