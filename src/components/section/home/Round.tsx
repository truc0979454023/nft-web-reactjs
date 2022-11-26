import React from "react";
import styled, { keyframes } from "styled-components";
import RoundTextBlack from "../../../assets/Rounded-Text-Black.png";
import RoundTextWhite from "../../../assets/Rounded-Text-White.png";

const rotate = keyframes`
    0%{
        transform: rotate(1turn);
    }
`;

const Button = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;

  @media (max-width: 64rem) {
    position: relative;
    right: unset;
    bottom: unset;
    width: 5rem;
    height: 5rem;
  }

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
`;

const Circle = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${(props) => props.theme.fontxl};
`;

const Round = () => {
  return (
    <Button>
      <Circle>&#x2193;</Circle>
      <img src={RoundTextBlack} alt="NFT" />
    </Button>
  );
};

export default Round;
