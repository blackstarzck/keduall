import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mainItems } from '../../data/sectionItems';

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null);
  const timerRef = useRef(null);
  const [pause, setPause] = useState(false);
  const { bannerItems } = mainItems.mainBanner;

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      if (pause) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  }, [pause]);

  return (
    <MainBannerContainer>
      <Swiper
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => swiperRef.current = swiper}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={(swiper, timeLeft, percentage) => {
          if (timerRef.current) {
            timerRef.current.style.width = `${(1 - percentage) * 100}%`; // Update bar width based on percentage
          }
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1)

          if (swiperRef.current && swiperRef.current.autoplay) {
            if (pause) {
              swiperRef.current.autoplay.stop();
            }
          }
        }}
      >
        {bannerItems.map((item) => (
          <SwiperSlide>
            {({ isActive }) => (
              <BannerItem src={item.src}>
                <Description className={isActive ? 'active' : ''}>
                  <h2>{item.title}</h2>
                  <div>
                    <p>{item.description1}</p>
                    <p>{item.description2}</p>
                  </div>
                </Description>
            </BannerItem>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Pagination>
        <div className="pagination-container">
          <span className="current font-concept font-bold">0{currentSlide}</span>
          <div className="progress">
            <div ref={timerRef} className="bar"></div>
          </div>
          <span className="total font-concept font-bold">0{bannerItems.length}</span>
          <div className="arrows">
            <button onClick={() => swiperRef.current.slidePrev()} className="prev"><img src="/icons/arrow-left-white.svg" alt="이전" /></button>
            <button onClick={() => swiperRef.current.slideNext()} className="next"><img src="/icons/arrow-right-white.svg" alt="다음" /></button>
          </div>
          <button className="play-pause" onClick={() => setPause(!pause)}><img src={pause ? "/icons/play-white.svg" : "/icons/pause-white.svg"} alt="일시정지" /></button>
        </div>
      </Pagination>
    </MainBannerContainer>
  );
};

const MainBannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const BannerItem = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Description = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -56%);
  transition: all 0.3s ease-in-out .3s;
  opacity: 0;
  padding: 0 16px;

  &.active {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  h2 {
    font-size: 62px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 20px;
    word-break: keep-all;
  }
  p {
    font-size: 24px;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 1.4;
  }

  @media screen and (min-width: 360px) {
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 46px;
    }
    p {
      font-size: 24px;
    }
  }
`;

const Pagination = styled.div`
  width: 100%;
  z-index: 1;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 14px;
    color: #FFFFFF;
  }

  .pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .current, .total {
    // font-family: 'Myriad Variable Concept';
  }

  .progress {
    width: 142px;
    height: 3px;
    border-radius: 9999px;
    background-color: rgba(0, 0, 0, .2);
    position: relative;

    .bar {
      width: 0;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #FFFFFF;
      border-radius: 9999px;
    }
  }

  button {
    width: 24px;
    height: 24px;
    cursor: pointer;
    &.prev {
      margin-right: 8px;
    }
    &.play-pause {
      border-radius: 50%;
      background-color: rgba(0, 0, 0, .2);
    }
  }
`;

export default MainBanner;
