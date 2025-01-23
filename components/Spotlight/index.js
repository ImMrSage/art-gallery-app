import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({
  image,
  title,
  artist,
  toggleFavorite,
  isFavorite,
}) {
  return (
    <section>
      <FavoriteButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      <div>
        <h2>{title}</h2>
        <figure>
          <Image src={image} alt="art-piece" width={300} height={300} />
          <figcaption>by {artist}</figcaption>
        </figure>
      </div>
    </section>
  );
}
