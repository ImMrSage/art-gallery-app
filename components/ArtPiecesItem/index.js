import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 2rem;
  overflow: hidden;
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Title = styled.h2`
  text-align: center;
`;

const Caption = styled.figcaption`
  margin-top: 1rem;
  font-style: italic;
  padding-left: 0.5rem;
  font-size: 1.05rem;
`;

export default function ArtPiecesItem({
  image,
  title,
  artist,
  slug,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <Figure>
      <Title>{title}</Title>
      <FavoriteButton
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        positionAbsolute={true}
      />
      <Link href={`art-pieces/${slug}`}>
        <Container>
          <Image
            src={image}
            alt="art-piece"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </Container>
      </Link>
      <Caption>by {artist}</Caption>
    </Figure>
  );
}
