import useSWR from "swr";
import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import styled from "styled-components";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("Error");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(slug) {
    const favoritePieces = favorites.find((piece) => piece.slug === slug);
    if (favoritePieces) {
      setFavorites(
        favorites.map((favorite) =>
          favorite.slug === slug
            ? { slug, isFavorite: !favorite.isFavorite }
            : favorite
        )
      );
    } else {
      setFavorites([...favorites, { slug, isFavorite: true }]);
    }
    console.log(favorites);
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <StyledHeader>Art Gallery</StyledHeader>
      <Component
        {...pageProps}
        pieces={data}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
      <Navigation />
    </>
  );
}

const StyledHeader = styled.h1`
  position: relative;
  width: 100%;
  text-align: center;
  padding-bottom: 1.75rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
