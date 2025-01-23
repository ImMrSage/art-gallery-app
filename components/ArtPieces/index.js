import ArtPiecesItem from "../ArtPiecesItem";
import styled from "styled-components";

const Container = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 7rem;
  justify-content: center;

  li {
    width: 30rem;
    min-width: 10rem;
    height: 30rem;
  }
`;

export default function ArtPieces({ pieces, toggleFavorite, favorites }) {
  return (
    <Container>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesItem
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            toggleFavorite={() => toggleFavorite(piece.slug)}
            isFavorite={
              favorites?.find(
                (favoritePiece) => favoritePiece.slug === piece.slug
              )?.isFavorite
            }
          />
        </li>
      ))}
    </Container>
  );
}
