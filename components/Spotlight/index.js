import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({ image, title, artist }) {
  return (
    <section>
      <FavoriteButton />
      <figure>
        <h2>{title}</h2>
        <div>
          <Image src={image} alt="art-piece" width={300} height={300} />
          <caption>by {artist}</caption>
        </div>
      </figure>
    </section>
  );
}
