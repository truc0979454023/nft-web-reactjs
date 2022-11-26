import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { dark, light } from "../../../styles/themes";
import Button from "../../common/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 64rem) {
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};

  @media (max-width: 64rem) {
    font-size: ${(props) => props.theme.fontxl};
    text-align: center;
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  font-weight: 400;

  @media (max-width: 64rem) {
    font-size: ${(props) => props.theme.fontmd};
    text-align: center;
  }
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  font-weight: 400;

  @media (max-width: 64rem) {
    font-size: ${(props) => props.theme.fontsm};
    text-align: center;
  }
`;

const Content = () => {
  return (
    <Container>
      <Title>Welcome To The Weirdos Club.</Title>
      <SubText>
        The WEIRDOS CLUB is a private collection of NFTs—unique digital
        collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum
        blockchain and hosted on IPFS.
      </SubText>
      <SubTextLight>
        With more than 200+ hand drawn traits, each NFT is unique and comes with
        a membership to an exclusive group of successful investors. Join an
        ambitious ever-growing community with multiple benefits and utilities.
      </SubTextLight>
      <ThemeProvider theme={dark}>
        <Button text="JOIN OUR DISCORD" link="#" />
      </ThemeProvider>
    </Container>
  );
};

export default Content;
