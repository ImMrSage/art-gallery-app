import ArtPiecesItem from "../ArtPiecesItem";

export default function ArtPieces({ pieces, toggleFavorite, favorites }) {
  return (
    <>
      <div>
        <ul>
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
        </ul>
      </div>
    </>
  );
}
