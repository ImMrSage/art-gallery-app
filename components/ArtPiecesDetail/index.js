import Image from "next/image";

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
      <h2>{title}</h2>
      <div>
        <Image src={image} alt="art-piece" width={300} height={300} />
        <ul>
          {colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
        <span>by {artist}</span>
      </div>
    </section>
  );
}
