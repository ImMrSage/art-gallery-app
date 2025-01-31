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
  background-color: rgb(203, 228, 228);
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(58, 58, 58);
  font-weight: bold;
  &:hover {
    color: blue;
  }
`;

const Borderline = styled.hr`
  height: 100%;
  border: 1px solid rgb(107, 124, 123);
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
