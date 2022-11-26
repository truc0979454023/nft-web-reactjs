import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text?: string;
  link?: string;
  padding?: string;
};

const Btn = styled.button<{ padding: string | undefined }>`
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontsm};
  padding: ${(props) =>
    `${props.padding ? `${props.padding}` : "0.9rem 2.3rem"}`};
  font-weight: 600;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1.11);
  }
`;

const Button = ({ text, link, padding }: ButtonProps) => {
  return (
    <Btn padding={padding}>
      <a href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
      </a>
    </Btn>
  );
};

export default Button;
