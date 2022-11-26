import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import styled from "styled-components";
import Button from "../common/Button";
import Logo from "../common/Logo";
import Round from "../section/home/Round";
import Menu from "./Menu";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  padding: 1rem 0;
  position: relative;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

const HamburgerMenu = styled.div<{ isClick: boolean }>`
  width: ${(props) => (props.isClick ? "2rem" : "1.5rem")};
  height: 2px;
  background-color: ${(props) => props.theme.text};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.isClick
      ? "translate(-50%, -50%) rotate(90deg)"
      : "translate(-50%, -50%) rotate(0)"};

  transition: all 0.2s ease;
  cursor: pointer;
  display: none;

  @media (max-width: 64rem) {
    /* 1024px */
    display: flex;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: ${(props) => (props.isClick ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.isClick ? "-2px" : "0")};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.isClick ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.isClick ? "rotate(-40deg) " : "rotate(0)")};
  }

  &::before {
    bottom: ${(props) => (props.isClick ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.isClick ? "rotate(40deg)" : "rotate(0)")};
  }

  span {
    width: 100%;
    height: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Navigation = () => {
  const [isClick, setIsClick] = useState(false);
  const { width } = useWindowSize();

  return (
    <Section id="header">
      <NavBar>
        <Logo />
        <HamburgerMenu isClick={isClick} onClick={() => setIsClick(!isClick)}>
          <span></span>
        </HamburgerMenu>
        <Menu isClick={isClick} setIsClick={setIsClick} />
        {width > 1024 ? <Button text="Connect Wallet" link="#!" /> : <Round />}
      </NavBar>
    </Section>
  );
};

export default Navigation;
