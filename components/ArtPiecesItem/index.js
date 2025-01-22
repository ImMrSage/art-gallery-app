import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecesItem({ image, title, artist, slug }) {
  return (
    <>
      <FavoriteButton />
      <Link href={`art-pieces/${slug}`}>
        <figure>
          <h2>{title}</h2>
          <div>
            <Image src={image} alt="art-piece" width={300} height={300} />
            <caption>by {artist}</caption>
          </div>
        </figure>
      </Link>
    </>
  );
}
