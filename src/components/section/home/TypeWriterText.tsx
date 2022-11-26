import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "../../common/Button";

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  @media (max-width: 48rem) {
    font-size: ${(props) => props.theme.fontxl};
    align-self: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48rem) {
    font-size: ${(props) => props.theme.fontmd};

    align-self: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48rem) {
    align-self: center;
    display: flex;
    justify-content: center;
  }
`;

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover a new are of cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span class='text-1'>NFTs.</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-2'>Collectible Items.</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-3'>Ape Killers!</span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Border Of Apes? Try Something New.</SubTitle>
      <ButtonContainer>
        <Button text="Explore" link="#about"></Button>
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
