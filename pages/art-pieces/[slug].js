import ArtPiecesDetail from "@/components/ArtPiecesDetail";
import { useState, useEffect } from "react";

export default function DetailsPage({ pieces }) {
  const [selectedPiece, setSelectedPiece] = useState(null);
  useEffect(() => {
    setSelectedPiece(pieces.find((piece) => piece.slug === slug));
  }, [pieces]);

  return (
    <ArtPiecesDetail
      title={selectedPiece.name}
      image={selectedPiece.imageSource}
      artist={selectedPiece.artist}
      year={selectedPiece.year}
      colors={selectedPiece.colors}
      genre={selectedPiece.genre}
    />
  );
}
