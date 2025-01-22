import ArtPiecesDetail from "@/components/ArtPiecesDetail";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function DetailsPage({ pieces }) {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    setSelectedPiece(pieces.find((piece) => piece.slug === slug));
  }, [pieces, slug]);

  if (!selectedPiece) {
    return <div>Loading...</div>;
  }
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
