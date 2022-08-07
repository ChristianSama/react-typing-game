import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  gap: 2rem;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem;
  color: #404040;
  &:hover {
    color: #ff6153;
  }
`;
const NavTitle = styled(NavLink)`
  font-size: 20px;
  color: #ff6153;
`;
const StyledLink = styled.a`
  text-decoration: none;
  padding: 0.5rem;
  color: #404040;
  &:hover {
    color: #ff6153;
  }
`;
export const NavBar = () => {
  return (
    <StyledNavBar>
      <NavTitle to="/">Anime Typing Game</NavTitle>
      <NavList>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <StyledLink href="https://github.com/ChristianSama/react-typing-game">
            Github
          </StyledLink>
        </li>
      </NavList>
    </StyledNavBar>
  );
};
