import Spotlight from "@/components/Spotlight";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  position: relative;
  width: 100%;
  text-align: center;
  padding-bottom: 1.75rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function HomePage({ pieces, toggleFavorite, favorites }) {
  const [randomPiece, setRandomPiece] = useState(null);

  useEffect(() => {
    setRandomPiece(pieces[Math.floor(Math.random() * pieces.length)]);
  }, [pieces]);

  if (!randomPiece) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <StyledHeader>Art Gallery</StyledHeader>
      <Spotlight
        image={randomPiece.imageSource}
        title={randomPiece.name}
        artist={randomPiece.artist}
        toggleFavorite={() => toggleFavorite(randomPiece.slug)}
        isFavorite={
          favorites.find((piece) => piece.slug === randomPiece.slug)?.isFavorite
        }
      />
    </>
  );
}
