import { StyledBox } from "../styledComponents/StyledBox";
import styled from "styled-components";
import { QuoteData } from "../types/Quote";
import { QuoteBox } from "./QuoteBox";

const ResultsBox = styled(StyledBox)`
  width: 70%;
`
const Image = styled.img`
  width: 25%;  
  margin: 1rem;
`
const SubResults = styled.div`
  display: flex;
`
const Stats = styled.div`
  margin: 1rem;
`

export const Results = (props: { quote: QuoteData }) => {
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
        </Stats>
      </SubResults>
    </ResultsBox>
  );
};
