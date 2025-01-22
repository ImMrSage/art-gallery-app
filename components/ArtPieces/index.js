import ArtPiecesItem from "../ArtPiecesItem";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
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
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
