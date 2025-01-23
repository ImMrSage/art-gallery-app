import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
`;

const Color = styled.li`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

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
      <div>
        <Image src={image} alt="art-piece" width={300} height={300} />
        <List>
          {colors.map((color, index) => (
            <Color key={index} color={color} />
          ))}
        </List>
        <p>
          {artist}: {title}
        </p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </div>
    </section>
  );
}
