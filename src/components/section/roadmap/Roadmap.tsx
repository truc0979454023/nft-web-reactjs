import React from "react";
import styled from "styled-components";
import DrawSvg from "./DrawSvg";
import TagList from "./TagList";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  padding: 1rem 0;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 48rem) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 70%;
  height: 2048px;
  background-color: ${(props) => props.theme.body};
  margin: 0.5rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64rem) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Roadmap = () => {
  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <TagList />
      </Container>
    </Section>
  );
};

export default Roadmap;
