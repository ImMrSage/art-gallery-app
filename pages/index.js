import Spotlight from "@/components/Spotlight";
import { useState, useEffect } from "react";
export default function HomePage({ pieces }) {
  const [randomPiece, setRandomPiece] = useState(null);

  useEffect(() => {
    setRandomPiece(pieces[Math.floor(Math.random() * pieces.length)]);
  }, [pieces]);

  if (!randomPiece) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomPiece.imageSource}
        title={randomPiece.name}
        artist={randomPiece.artist}
      />
    </>
  );
}
