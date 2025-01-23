import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
`;

const Color = styled.li`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 25rem;
  height: 50vh;
  border: none;
  border-radius: 2rem;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 5rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: cyan;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
`;

export default function ArtPiecesDetail({
  image,
  colors,
  title,
  artist,
  year,
  genre,
}) {
  return (
    <section>
      <StyledLink href="/art-pieces">← Back</StyledLink>

      <Container>
        <Image src={image} alt="art-piece" fill />
      </Container>
      <List>
        {colors.map((color, index) => (
          <Color key={index} color={color} />
        ))}
      </List>
      <Details>
        <p>
          {artist}: {title}
        </p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </Details>
    </section>
  );
}
