import { useState } from "react";
import styled from "styled-components";
import { primary } from "@/lib/colors";
import StarSolidIcon from "./icons/StarSolidIcon";
import StarOutlineIcon from "./icons/StarOutlineIcon";

const StarsWrapper = styled.div`
display: inline-flex
gap: 1px
align-items:center`;

const StarWrapper = styled.button`
  ${(props) =>
    props.size === "md" &&
    `
    height: 1.4rem;
    width: 1.4rem;
  `}
  ${(props) =>
    props.size === "sm" &&
    `
    height: 1rem;
    width: 1rem;
  `}
  ${(props) =>
    !props.disabled &&
    `
    cursor: pointer;
  `}
  padding: 0;
  border: 0;
  display: inline-block;
  background-color: transparent;
  color: ${primary};
`;

export default function StarsRating({
  size = "md",
  defaultNumber = 0,
  disabled,
  onChange,
}) {
  const [stars, setStars] = useState(defaultNumber);
  const starsNumber = [1, 2, 3, 4, 5];

  function handleStarClick(number) {
    if (disabled) {
      return;
    }
    setStars(number);
    onChange(number);
  }
  return (
    <StarsWrapper>
      {starsNumber.map((number) => (
        <>
          <StarWrapper
            disabled={disabled}
            size={size}
            onClick={() => handleStarClick(number)}
          >
            {stars >= number ? <StarSolidIcon /> : <StarOutlineIcon />}
          </StarWrapper>
        </>
      ))}
    </StarsWrapper>
  );
}
