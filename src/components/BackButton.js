import { Link } from "react-router-dom";
import styled from "styled-components"
import rightArrow from "../assets/images/right arrow.png";

const Img = styled.img`
  width: 3rem;
  z-index: 2;
  transition: 0.6s;
  transform: scaleX(-1);

  &:hover {
    transform: scaleX(-1) scale(1.2);
  }
`

function BackButton() {
  return (
    <Link to={"/"}>
      <Img
        className="back-button-img"
        src={rightArrow}
        alt="back button"
      />
    </Link>
  );
}

export default BackButton;
