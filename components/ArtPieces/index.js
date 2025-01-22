import ArtPiecesList from "../ArtPiecesList";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <>
      <div>
        <ul>
          {pieces?.map((piece) => (
            <li key={piece.slug}>
              <ArtPiecesList
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
