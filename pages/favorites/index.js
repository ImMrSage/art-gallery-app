import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({ pieces, favorites, toggleFavorite }) {
  const favoritesList = pieces.filter((piece) =>
    favorites.find(
      (favoritePiece) =>
        favoritePiece.slug === piece.slug && favoritePiece.isFavorite
    )
  );
  return (
    <>
      <ArtPieces
        pieces={favoritesList}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}
