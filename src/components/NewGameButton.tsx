import styled from "styled-components";
import { buttonStyle } from "../styledComponents/ButtonStyle";

const StyledButton = styled.button`
  ${buttonStyle}
  padding: 1rem;
  font-size: 20px;
  font-family: inherit;
`;

export const NewGameButton = (props: {newGame: () => void}) => {
  return <StyledButton onClick={props.newGame}>Play Again</StyledButton>;
};
