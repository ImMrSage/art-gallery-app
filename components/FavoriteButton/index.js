import Image from "next/image";

export default function FavoriteButton() {
  return (
    <button type="button">
      <Image
        src="/assets/heart.svg"
        alt="favorite-button"
        width={30}
        height={30}
      />
    </button>
  );
}
