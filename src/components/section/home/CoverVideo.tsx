import React from "react";
import styled from "styled-components";
import GIF from "../../../assets//Home GIF.gif";

const VideoContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 48rem) {
    width: 50%;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <img src={GIF} />
    </VideoContainer>
  );
};

export default CoverVideo;
