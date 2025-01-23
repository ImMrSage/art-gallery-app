import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ pieces, favorites, toggleFavorite }) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}
