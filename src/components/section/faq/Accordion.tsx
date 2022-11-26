import React, { useState } from "react";
import styled from "styled-components";
import { Minus } from "../../../Icons/Minus";
import { Plus } from "../../../Icons/Plus";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Container = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 3rem 0;

  @media (max-width: 64rem) {
    margin: 0;
  }

  @media (max-width: 48rem) {
    margin: 0;
  }
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (max-width: 48rem) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.span`
  font-size: ${(props) => props.theme.fontxl};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    font-size: ${(props) => props.theme.fontmd};
  }

  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.body};
  }
`;

const Reveal = styled.div<{ clicked: boolean }>`
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin-top: 1rem;
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
  line-height: 1.1rem;
`;

const Accordion = ({ title, children }: AccordionProps) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>{title}</Name>

        {collapse ? (
          <Indicator>
            <Minus />
          </Indicator>
        ) : (
          <Indicator>
            <Plus />
          </Indicator>
        )}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
