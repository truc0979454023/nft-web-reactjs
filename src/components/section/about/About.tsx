import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import Content from "./Content";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem 0;

  @media (max-width: 64rem) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64rem) {
    flex-direction: column;
    width: 100%;
    gap: 4rem;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64rem) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Content />
        </Box>
      </Container>
    </Section>
  );
};

export default About;
