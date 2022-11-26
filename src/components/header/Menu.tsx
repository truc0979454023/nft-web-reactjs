import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import styled from "styled-components";
import Button from "../common/Button";

type MenuProps = {
  isClick: boolean;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const List = styled.ul<{ click: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 1rem;

  @media (max-width: 64rem) {
    /* 1024px */
    position: fixed;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `100vh - ${props.theme.navHeight}`};
    z-index: 50;
    overflow: auto;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};

    transition: all 0.5s ease;
    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(100%)"};
  }
`;

const Item = styled.li`
  font-weight: 600;
  color: ${(props) => props.theme.text};
  cursor: pointer;

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

const Menu = ({ isClick, setIsClick }: MenuProps) => {
  const { width } = useWindowSize();

  const scrollTo = (id: string) => {
    let element: HTMLElement | null = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    setIsClick(!isClick);
  };
  return (
    <List click={isClick} onClick={() => setIsClick(!isClick)}>
      <Item onClick={() => scrollTo("home")}>Home</Item>
      <Item onClick={() => scrollTo("about")}>About</Item>
      <Item onClick={() => scrollTo("roadmap")}>Roadmap</Item>
      <Item onClick={() => scrollTo("showcase")}>Showcase</Item>
      <Item onClick={() => scrollTo("team")}>Team</Item>
      <Item onClick={() => scrollTo("faq")}>Faq</Item>
      {width < 1024 && <Button text="Connect Wallet" link="#!" />}
    </List>
  );
};

export default Menu;
