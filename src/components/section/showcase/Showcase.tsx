import React, { useRef } from "react";
import styled, { keyframes, StyledComponent } from "styled-components";
import Item from "./Item";

import img1 from "../../../assets/Nfts/bighead-1.svg";
import img2 from "../../../assets/Nfts/bighead-2.svg";
import img3 from "../../../assets/Nfts/bighead-3.svg";
import img4 from "../../../assets/Nfts/bighead-4.svg";
import img5 from "../../../assets/Nfts/bighead-5.svg";
import img6 from "../../../assets/Nfts/bighead-6.svg";
import img7 from "../../../assets/Nfts/bighead-7.svg";
import img8 from "../../../assets/Nfts/bighead-8.svg";
import img9 from "../../../assets/Nfts/bighead-9.svg";
import img10 from "../../../assets/Nfts/bighead-10.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const move = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(-100%);
  }
`;

const Row = styled.div<{ direction: string }>`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  animation: ${move} 20s linear infinite ${(props) => props.direction};
`;

const Showcase = () => {
  const row1Refs = useRef(null);
  const row2Refs = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={row1Refs}>
        <Item passRef={row1Refs} img={img1} number={154} price={12.1} />
        <Item passRef={row1Refs} img={img2} number={541} price={1.1} />
        <Item passRef={row1Refs} img={img3} number={888} price={2.8} />
        <Item passRef={row1Refs} img={img4} number={468} price={4.8} />
        <Item passRef={row1Refs} img={img5} number={789} price={8.0} />
      </Row>

      <Row direction="reverse" ref={row2Refs}>
        <Item passRef={row2Refs} img={img6} number={650} price={7.9} />
        <Item passRef={row2Refs} img={img7} number={322} price={6.3} />
        <Item passRef={row2Refs} img={img8} number={841} price={5.4} />
        <Item passRef={row2Refs} img={img9} number={632} price={10} />
        <Item passRef={row2Refs} img={img10} number={489} price={1} />
      </Row>
    </Section>
  );
};

export default Showcase;
