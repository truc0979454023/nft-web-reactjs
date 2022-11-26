import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Vector from "../../../Icons/Vector";
import ScrollTrigger from "gsap/ScrollTrigger";
import useWindowSize from "react-use/lib/useWindowSize";

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;

    path {
      stroke: ${(props) => props.theme.text};
    }
  }
`;

const Bounce = keyframes`
    from {
        transform: translateX(-50%) scale(0.5);
    }
    to{
        transform: translateX(-50%) scale(1);
    }
`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.text};
  animation: ${Bounce} 0.5s linear infinite alternate;

  @media (max-width: 48rem) {
    left: 1.5rem;
    transform: unset;
  }
`;

const DrawSvg = () => {
  const { width } = useWindowSize();
  const [viewBox, setViewBox] = useState("");

  const vectorRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const ballRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (width <= 768) {
      setViewBox("");
    } else {
      setViewBox("0 0 52 2048");
    }
  }, [width]);

  //   Tự vẽ đường line khi scroll
  useLayoutEffect(() => {
    let element: HTMLDivElement | null = vectorRef.current;

    let svg: SVGPathElement | null = document.getElementById(
      "svg-path"
    ) as SVGPathElement | null;

    if (svg) {
      const length: number = svg.getTotalLength();
      const lengthString: string = String(length);
      svg.style.strokeDasharray = lengthString;
      svg.style.strokeDashoffset = lengthString;

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom bottom",
          onUpdate: (self) => {
            const draw: number = length * self.progress;

            if (svg) {
              svg.style.strokeDashoffset = String(length - draw);
            }
          },
          onToggle: (self) => {
            if (self.isActive) {
              if (ballRef && ballRef.current) {
                ballRef.current.style.display = "none";
              }
            } else {
              if (ballRef && ballRef.current) {
                ballRef.current.style.display = "inline-block";
              }
            }
          },
        },
      });
      return () => {
        if (t1) {
          t1.kill();
        }
      };
    }
  }, []);

  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={vectorRef}>
        <Vector viewBox={viewBox} />
      </VectorContainer>
    </>
  );
};

export default DrawSvg;
