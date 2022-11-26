import React, { useLayoutEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";

const Up = styled.div<{ ref: React.MutableRefObject<HTMLElement | null> }>`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};

  font-size: ${(props) => props.theme.fontxl};
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  cursor: pointer;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: calc(0.9);
  }
`;

const ScrollToTop = () => {
  const ref: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  const { y } = useWindowScroll();

  const scrollToTop = () => {
    let element: HTMLElement | null = document.getElementById("header");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  useLayoutEffect(() => {
    console.log(y);
    if (ref.current)
      if (y < 200) {
        ref.current.style.display = "none";
      } else {
        ref.current.style.display = "flex";
      }
  }, [y]);

  return (
    <Up ref={ref} onClick={scrollToTop}>
      &#x2191;
    </Up>
  );
};

export default ScrollToTop;
