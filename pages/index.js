import Spotlight from "@/components/Spotlight";
import { useState, useEffect } from "react";

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
