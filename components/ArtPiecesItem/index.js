import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecesItem({
  image,
  title,
  artist,
  slug,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <>
      <FavoriteButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      <Link href={`art-pieces/${slug}`}>
        <div>
          <h2>{title}</h2>
          <figure>
            <Image src={image} alt="art-piece" width={300} height={300} />
            <figcaption>by {artist}</figcaption>
          </figure>
        </div>
      </Link>
    </>
  );
}
