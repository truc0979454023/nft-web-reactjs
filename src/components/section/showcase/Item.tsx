import React, { useRef } from "react";
import styled from "styled-components";
import ETH from "../../../assets/icons8-ethereum-48.png";

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
  border-radius: 20px;
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 48rem) {
    width: 12rem;
  }

  @media (max-width: 32rem) {
    width: 9rem;
  }
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  background-color: ${(props) => props.theme.text};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transform: translateX(-4px);

  img {
    width: 1rem;
    height: auto;
  }
`;

type ItemProps = {
  img?: string;
  number?: number;
  price?: number;
  passRef: React.MutableRefObject<HTMLDivElement | null>;
};

const Item = ({ img, number = 0, price = 0, passRef }: ItemProps) => {
  const itemRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  let play = () => {
    if (passRef.current) passRef.current.style.animationPlayState = "running";
    if (itemRef.current) itemRef.current.style.transform = "scale(1)";
  };

  let pause = () => {
    if (passRef.current) passRef.current.style.animationPlayState = "paused";
    if (itemRef.current) itemRef.current.style.transform = "scale(1.05)";
  };

  return (
    <ImgContainer ref={itemRef} onMouseOver={pause} onMouseOut={play}>
      <img src={img} alt="" />
      <Detail>
        <div>
          <span>Weirdos</span>
          <br />
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Detail>
    </ImgContainer>
  );
};

export default Item;
