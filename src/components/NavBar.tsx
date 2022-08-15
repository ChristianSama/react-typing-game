import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  gap: 2rem;
  background-color: ${(props) => props.theme.background};
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem;
  color: ${(props) => props.theme.foreground};
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;
const NavTitle = styled(NavLink)`
  font-size: 20px;
  color: ${(props) => props.theme.secondary};
`;
const StyledLink = styled.a`
  text-decoration: none;
  padding: 0.5rem;
  color: ${(props) => props.theme.foreground};
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

export const NavBar = (props: { toggleTheme: () => void }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledNavBar>
      <NavTitle to="/">Anime Typing Game</NavTitle>
      <NavList>
        <li>
          <div onClick={props.toggleTheme}>{theme.name}</div>
        </li>
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
