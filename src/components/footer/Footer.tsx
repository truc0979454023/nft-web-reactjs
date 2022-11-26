import React from "react";
import styled from "styled-components";
import Facebook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";
import LinkedIn from "../../Icons/LinkedIn";
import Twitter from "../../Icons/Twitter";
import Logo from "../common/Logo";
import Banner from "./Banner";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid ${(props) => props.theme.text};

  @media (max-width: 48rem) {
    justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;

  & > * {
    transition: all 0.2s ease;

    svg {
      fill: ${(props) => props.theme.text};
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Right = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48rem) {
    display: none;
  }
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  font-weight: 600;

  &:after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${(props) => props.theme.text};
    transition: width 0.2s ease;
    border-radius: 4px;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Footer = () => {
  const scrollTo = (id: string) => {
    let element = document.getElementById(id);

    if (element)
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  };
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="https://facebook.com" target="_blank">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank">
              <Instagram />
            </a>
            <a href="https://twitter.com" target="_blank">
              <Twitter />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </a>
          </IconList>
        </Left>
        <Right>
          <Item onClick={() => scrollTo("home")}>Home</Item>
          <Item onClick={() => scrollTo("about")}>About</Item>
          <Item onClick={() => scrollTo("roadmap")}>Roadmap</Item>
          <Item onClick={() => scrollTo("showcase")}>Showcase</Item>
          <Item onClick={() => scrollTo("team")}>Team</Item>
          <Item onClick={() => scrollTo("faq")}>Faq</Item>
        </Right>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Weirdos Club. All rights reserved.
        </span>

        <span>Made with &#10084; by minhtruc060500</span>
      </Bottom>
    </Section>
  );
};

export default Footer;
