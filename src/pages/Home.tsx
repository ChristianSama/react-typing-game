import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledBox } from "../styledComponents/StyledBox";
import { buttonStyle } from "../styledComponents/ButtonStyle";

const Container = styled(StyledBox)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const StartButton = styled(Link)`
  ${buttonStyle}
  font-size: 25px;
  width: 50%;
`;

export const Home = () => {
  return (
    <Container>
      <h1>Anime Typing Game</h1>
      <StartButton to="/game">Start Game</StartButton>
    </Container>
  );
};
