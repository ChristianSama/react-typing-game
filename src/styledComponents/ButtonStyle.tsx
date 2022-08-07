import { css } from "styled-components";

export const buttonStyle = css`
  background-color: white;
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
    cursor: pointer;
  }
`;
