import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";

const List = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  &:nth-child(even) {
    justify-content: flex-start;
    div {
      border-radius: 50px 0 50px 0;

      text-align: right;

      p {
        border-radius: 50px 0 50px 0;
      }
    }

    @media (max-width: 48rem) {
      justify-content: flex-end;

      div {
        border-radius: 0 50px 0 50px;
        text-align: left;

        p {
          border-radius: 0 50px 0 50px;
        }
      }
    }
  }
  &:nth-child(odd) {
    justify-content: flex-end;

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;

      p {
        border-radius: 0 50px 0 50px;
      }
    }
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48rem) {
    width: 70%;
  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;

const Title = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
`;

const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 0;
`;

type RoadMapItemProps = {
  title?: string;
  subText?: string;
  addToRefs?: (el: any) => void;
};

const RoadMapItem = ({ title, subText, addToRefs }: RoadMapItemProps) => {
  return (
    <Item ref={addToRefs}>
      <ItemContainer>
        <Box>
          <Title>{title}</Title>
          <Text>{subText}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const TagList = () => {
  const revealRefs: any = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el: any) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  // Chỉnh lại vị trí của các tagitem
  useLayoutEffect(() => {
    let temp = gsap.timeline();
    revealRefs.current.forEach((el: any, index: number) => {
      temp.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center ",
            scrub: true,
            // markers: true,
          },
        }
      );
    });
    return () => {};
  });
  return (
    <List>
      {/* Empty item */}
      <Item>&nbsp;</Item>
      <RoadMapItem
        addToRefs={addToRefs}
        title="Grand Opening"
        subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
      />
      <RoadMapItem
        addToRefs={addToRefs}
        title="Great Benefits"
        subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
      />
      <RoadMapItem
        addToRefs={addToRefs}
        title="Early Access"
        subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
      />
      <RoadMapItem
        addToRefs={addToRefs}
        title="New Merch"
        subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
      />
      <RoadMapItem
        addToRefs={addToRefs}
        title="Holders Ranking"
        subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
      />
    </List>
  );
};

export default TagList;
