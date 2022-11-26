import React from "react";
import styled, { ThemeProvider } from "styled-components";

import img1 from "../../assets/Nfts/bighead-1.svg";
import img2 from "../../assets/Nfts/bighead-2.svg";
import img3 from "../../assets/Nfts/bighead-3.svg";
import img4 from "../../assets/Nfts/bighead-4.svg";
import img5 from "../../assets/Nfts/bighead-5.svg";
import { dark } from "../../styles/themes";
import Button from "../common/Button";

const Section = styled.section`
  width: 100vw;
  min-height: 15rem;
  height: 55%;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};

  background-color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (max-width: 48rem) {
    flex-direction: column;
    padding: 1rem 0;
    /* height: fit-content; */
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15%;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};

  @media (max-width: 64rem) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48rem) {
    font-size: ${(props) => props.theme.fontxl};
    text-align: center;
    width: 75%;
  }
`;

const ButtonContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: end;

  @media (max-width: 48rem) {
    display: flex;
    justify-content: center;
  }
`;

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </ImgContainer>

      <Title>
        Join the <br /> weirdos club{" "}
      </Title>
      <ButtonContainer>
        <ThemeProvider theme={dark}>
          <Button text="JOIN NOW" link="#" />
        </ThemeProvider>
      </ButtonContainer>
    </Section>
  );
};

export default Banner;
