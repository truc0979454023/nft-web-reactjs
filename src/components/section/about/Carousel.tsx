import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/effect-cards/effect-cards.min.css";

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

import Arrow from "../../../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 64rem) {
    width: 30vw;
    height: 50vh;
  }

  @media (max-width: 48rem) {
    width: 40vw;
    height: 50vh;
  }

  @media (max-width: 32rem) {
    width: 60vw;
    height: 50vh;
  }

  .swiper {
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.text};
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .swiper-button-next {
    color: ${(props) => props.theme.body};
    right: 0;
    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &::after {
      display: none;
    }
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.body};
    right: 0;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &::after {
      display: none;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Carousel = () => {
  const data = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <Container>
      <Swiper
        navigation={true}
        effect={"cards"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        scrollbar={{
          draggable: true,
        }}
        pagination={{
          type: "fraction",
        }}
        grabCursor={true}
        modules={[EffectCards, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {data.map((d) => (
          <SwiperSlide key={d}>
            <img src={d} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
