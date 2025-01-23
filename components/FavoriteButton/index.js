import Image from "next/image";

export default function FavoriteButton({ isFavorite, toggleFavorite }) {
  return (
    <button type="button" onClick={toggleFavorite} isfavorite={isFavorite}>
      <Image
        src="/assets/heart.svg"
        alt="favorite-button"
        width={30}
        height={30}
      />
    </button>
  );
}
