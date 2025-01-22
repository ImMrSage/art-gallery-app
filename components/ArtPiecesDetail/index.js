import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecesDetail({
  image,
  colors,
  title,
  artist,
  year,
  genre,
}) {
  return (
    <section>
      <button type="button">
        <Link href="/art-pieces">Back</Link>
      </button>
      <FavoriteButton />
      <div>
        <Image src={image} alt="art-piece" width={300} height={300} />
        <ul>
          {colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
        <p>
          {artist}: {title}
        </p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </div>
    </section>
  );
}
