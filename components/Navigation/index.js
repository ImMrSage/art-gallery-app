import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: cyan;
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:hover {
    color: blue;
  }
`;

const Borderline = styled.hr`
  height: 100%;
  border: 1px solid black;
  margin: 0;
`;

export default function Navigation() {
  return (
    <Nav>
      <li>
        <StyledLink href="/">Spotlight</StyledLink>
      </li>
      <Borderline />
      <li>
        <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      </li>
      <Borderline />
      <li>
        <StyledLink href="/favorites">Favorites</StyledLink>
      </li>
    </Nav>
  );
}
