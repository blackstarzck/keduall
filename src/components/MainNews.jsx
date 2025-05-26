import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Description from './Description';
import NewsItem from './NewsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router';
import useDeviceType from '../hooks/useDeviceType';

const props = {
  heading: 'NEWS & NOTICE',
  description: <>
    <span className="block">케듀올의 최신 소식과 중요 안내를 전해드립니다.</span>
    <span className="block">지금 우리에게 일어나고 있는 이야기들을 확인해보세요.</span>
  </>
}

const newsItems = [
  {
    id: 1,
    imgSrc: "images/news-thumb-01.png",
    category: "NEWS",
    title: "‘2024 대한민국 동반성장 대상’ 최우수 명예기업 수상",
    date: "2024. 04. 07",
    link: "#"
  },
  {
    id: 2,
    imgSrc: "images/news-thumb-02.png",
    category: "NEWS",
    title: "제 30회 기업혁신 대상 시상식 ESG 경영에서 대상 수상",
    date: "2025. 05. 10",
    link: "#"
  },
]

const prevNewsItems = newsItems.reduce((acc, item, index, arr) => {
  if (index === 0) return acc; // 첫 번째 요소는 추가하지 않음
  return [...acc, item]; // 나머지 요소 추가
}, []).concat(newsItems[0]); // 첫 번째 요소를 마지막에 추가

const MainNews = () => {
  const [current, setCurrent] = useState(0);
  const swiperRef = useRef(null);
  const swiperPreviewRef = useRef(null);
  const deviceType = useDeviceType();

  useEffect(() => {
    console.log("deviceType: ", deviceType);
  }, [deviceType])

  return (
    <MainNewsContainer id="press">
      <Top>
        <div>
          <Heading>{props.heading}</Heading>
          <Description>
            {props.description}
          </Description>
        </div>
        <Pagination>
          <div className="pagination-container">
            <span className="current font-concept text-[var(--primary)]">0{current + 1}</span>
            <div className="arrows">
              <button
                onClick={() => {
                  swiperRef.current?.slidePrev()
                  swiperPreviewRef.current?.slidePrev()
                  setCurrent(swiperRef.current?.realIndex)
                }}
                className="prev">
                <img src="/icons/arrow-left.svg" alt="이전" />
              </button>
              <button
                onClick={() => {
                  swiperRef?.current.slideNext()
                  swiperPreviewRef?.current.slideNext()
                  setCurrent(swiperRef.current?.realIndex)
                }}
                className="next">
                <img src="/icons/arrow-right.svg" alt="다음" />
              </button>
            </div>
            <span className="total font-concept text-[#999999]">0{newsItems.length}</span>
          </div>
          <Link to="/"><span>뉴스 바로가기</span><img src="/icons/chevron_right.svg" alt="이동 아이콘" /></Link>
        </Pagination>
      </Top>

      {/* contens */}
      <Contents>
        <div className="left">
          <Swiper
            ref={swiperRef}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            speed={200}
            onSwiper={(swiper) => swiperRef.current = swiper}
            onTouchEnd={(swiper) => {
              if (swiper.swipeDirection === 'next') {
                swiperPreviewRef.current?.slideNext()
              } else if(swiper.swipeDirection === 'prev') {
                swiperPreviewRef.current?.slidePrev()
              }
              setCurrent(swiper.realIndex)
            }}
          >
            {
              newsItems.map((item) => (
                <SwiperSlide>
                  <NewsItem {...item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="right">
          <Swiper
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            speed={200}
            onSwiper={(swiper) => swiperPreviewRef.current = swiper}
            onTouchEnd={(swiper) => {
              if (swiper.swipeDirection === 'next') {
                swiperRef.current?.slideNext()
              } else if(swiper.swipeDirection === 'prev') {
                swiperRef.current?.slidePrev()
              }
            }}
          >
            {
              prevNewsItems.map((item) => (
                <SwiperSlide>
                  <NewsItem {...item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </Contents>
    </MainNewsContainer>
  );
};

const MainNewsContainer = styled.div`
  padding: 80px 36px 80px;

  @media screen and (min-width: 768px) {
    padding: 100px 46px 100px;
  }

  @media screen and (min-width: 1024px) {
    padding: 160px 80px 160px;
  }
`

const Contents = styled.div`

  display: flex;
  border-top: 1px solid #e8e8e8;

  .left {
    width:60%;
    padding: 50px 56px 30px 26px;
    border-right: 1px solid #e8e8e8;
  }

  .right {
    width: 40%;
    padding: 50px 30px 26px 56px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 768px) {
    border-top: none;
    margin-top: 18px;

    .left {
      width: 100%;
      padding: 0 0 50px;
      border-right: none;
    }
    .right {
      display: none;
    }
  }
`
const Top = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 46px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
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

  @media screen and (max-width: 410px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: #5e5e5e;
  text-decoration: none;
  margin-left: 26px;
`

export default MainNews;
