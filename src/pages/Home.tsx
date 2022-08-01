import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledBox } from "../styledComponents/StyledBox";

const Container = styled(StyledBox)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const StartButton = styled(Link)`
  font-size: 25px;
  width: 60%;
  height: 4rem;
  margin: 1rem auto;
  border: solid 1px #ff6153;
  color: #ff6153;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    background-color: #ff6153;
    color: white;
  }
`;

export const Home = () => {
  return (
    <Container>
      <h1>Anime Typing Game</h1>
      <StartButton to="/game">Start Game</StartButton>
    </Container>
  );
};
