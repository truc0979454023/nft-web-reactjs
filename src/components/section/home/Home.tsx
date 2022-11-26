import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import styled from "styled-components";
import CoverVideo from "./CoverVideo";
import Round from "./Round";
import TypeWriterText from "./TypeWriterText";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    flex-direction: column-reverse;
    gap: 2rem;
    width: 100%;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

const Home = () => {
  const { width } = useWindowSize();

  return (
    <Section id="home">
      <Container>
        <Box>
          <TypeWriterText />
        </Box>

        <Box>
          <CoverVideo />
        </Box>
        {width > 1024 && <Round />}
      </Container>
    </Section>
  );
};

export default Home;
