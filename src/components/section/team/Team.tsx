import React from "react";
import styled from "styled-components";

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
import Member from "./Member";
import ConfettiComponent from "./Confetti";

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
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Team = () => {
  const data = [
    { img: img1, name: "SkyBlaze", position: "Director" },
    { img: img2, name: "MegNum", position: "Manager" },
    { img: img3, name: "Monkey King", position: "Artist" },
    { img: img4, name: "BLACK PANTHER", position: "Social Media Manager" },
    { img: img5, name: "DEATHSTROKE", position: "Blockchain Specialist" },
    { img: img6, name: "LAZY KONG", position: "Founder" },
    { img: img7, name: "CYBER PUNK", position: "Co-Founder" },
    { img: img8, name: "MONK", position: "Web3 Developer" },
    { img: img9, name: "BANANA", position: "Graphic Designer" },
    { img: img10, name: "Avatar", position: "Design" },
  ];

  return (
    <Section id="team">
      {/* <ConfettiComponent /> */}
      <Title>Team</Title>
      <Container>
        {data.map((d, index) => (
          <Member key={index} img={d.img} name={d.name} position={d.position} />
        ))}
      </Container>
    </Section>
  );
};

export default Team;
