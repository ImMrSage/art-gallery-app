import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 80%;
  height: 25rem;
  border: none;
  border-radius: 2rem;
  overflow: hidden;
`;

const Section = styled.section`
  text-align: center;
  display: grid;
  place-items: center;
  margin-bottom: 15%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  top: -3rem;
  z-index: 1;
`;

export default function Spotlight({
  image,
  title,
  artist,
  toggleFavorite,
  isFavorite,
}) {
  return (
    <Section>
      <h2>{title}</h2>
      <Container>
        <ButtonContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            positionAbsolute={true}
          />
        </ButtonContainer>
        <Image
          src={image}
          alt="art-piece"
          fill
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ objectFit: "cover" }}
        />
      </Container>
      <figcaption>by {artist}</figcaption>
    </Section>
  );
}
