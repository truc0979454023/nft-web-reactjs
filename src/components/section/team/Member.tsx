import React from "react";
import styled from "styled-components";

type MemberProps = {
  img: string;
  name: string;
  position: string;
};

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0.5rem;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  img {
    transition: all 0.3s ease;
  }

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.15);
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.text};

  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`;

const Member = ({ img, name = "", position = "" }: MemberProps) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt="" />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

export default Member;
