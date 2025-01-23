import styled from "styled-components";
import HeartIcon from "../HeartIcon/HeartIcon";

const Button = styled.button`
  position: ${({ $positionAbsolute }) =>
    $positionAbsolute ? "absolute" : "static"};
  right: 0.5rem;
  top: 3.5rem;
  z-index: 1;
  background: none;
  border: none;
  cursor: pointer;
`;

const FavoriteButton = ({
  isFavorite,
  toggleFavorite,
  positionAbsolute = false,
}) => {
  return (
    <Button
      type="button"
      onClick={toggleFavorite}
      $positionAbsolute={positionAbsolute}
      $isFavorite={isFavorite}
    >
      <HeartIcon fill={isFavorite ? "red" : "white"} />
    </Button>
  );
};

export default FavoriteButton;
