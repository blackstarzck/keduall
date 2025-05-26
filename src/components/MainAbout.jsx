import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Section from './Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { _checkPlugin } from 'gsap/gsap-core';
import useDeviceType from '../hooks/useDeviceType';

const props = {
  heading: 'ABOUT',
  description: <>
    <span className="block">지능형 기술로 확장하는 한국어 교육</span>
    <span className="block">배움을 넘어 진로까지 연결하고</span>
    <span className="block">모두를 위한 지속 가능한 성장을 이끕니다</span>
  </>
}

const viewItems = [
  {
    id: 1,
    heading: 'Vision',
    description: '케듀올은 전 세계 누구나 쉽고 자유롭게 한국어를 배울 수 있는 환경을 만듭니다. 우리는 AI 기반의 지능형 학습 시스템을 통해 개인 맞춤형 교육 경험을 제공하며, 단순한 언어 학습을 넘어 한국 문화와 장체성까지 함께이해하고 경험할 수 있도록 돕습니다. 언어의 장벽을 낮추고, 교육의 질을 높이며, 문화를 연결하는 것, 그것이 케듀올이 지향하는 교육의 미래입니다.',
    imageSrc: '/images/about-banner-01.png'
  },
  {
    id: 2,
    heading: 'Core Value',
    description: 'KEDUALL은 "언어를 넘어, 미래를 연결하는 교육 플랫폼"을 지향합니다. 이는 지속 가능한 성장을 위해 개인의 역량을 강화하고, AI 기반 맞춤형 학습 솔루션을 제공하여 누구나 자신의 목표에 도달할 수 있도록 돕는다는 의미입니다. KEDUALL은 혁신과 신뢰를 핵심 가치로 삼아, 학습자와 강사가 함께 성장하는 생태계를 만들어갑니다. 열정을 바탕으로 글로벌 사회에서 새로운 가능성을 열어가는 여정을 함께합니다.',
    imageSrc: '/images/about-banner-02.png'
  },
  {
    id: 3,
    heading: 'Business Strategy',
    description: 'KEDUALL은 "AI와 글로벌 커리어를 잇는 새로운 교육의 기준"을 제시합니다. AI 기술을 활용하여 개인별 맞춤형 학습 경험을 제공하고, 언어 교육을 넘어 실제 커리어로 이어지는 기회를 창출합니다. 또한 K-컬처 연계 프로그램을 통해 한국어와 문화를 동시에 배우는 차별화된 경험을 제공합니다. 끊임없는 플랫폼 혁신을 통해 사용자 중심의 서비스를 강화하며, 미래형 교육 플랫폼으로 성장해 나가고자 합니다',
    imageSrc: '/images/about-banner-03.png'
  }
];

const previewItems = viewItems.reduce((acc, item, index, arr) => {
  if (index === 0) return acc; // 첫 번째 요소는 추가하지 않음
  return [...acc, item]; // 나머지 요소 추가
}, []).concat(viewItems[0]); // 첫 번째 요소를 마지막에 추가

const MainAbout = () => {
  const [current, setCurrent] = useState(0);
  const [swiperDragStatus, setSwiperDragStatus] = useState(false);
  const swiperRef = useRef(null);
  const swiperPreviewRef = useRef(null);
  const deviceType = useDeviceType();

  useEffect(() => {
    console.log("deviceType: ", deviceType);

  }, [deviceType])

  return (
    <MainAboutContainer id="about">
      <Section {...props}>
        { 
          deviceType === 'desktop' ? (
            <DeskTopContents>
              <div className="left">
                <ul>
                {
                    viewItems.map((item) => (
                      <li
                        key={item.id}
                        className={current === (item.id - 1) ? 'active' : ''}
                        onClick={() => {
                          const targetIndex = item.id - 1;
                          swiperRef.current?.slideToLoop(targetIndex)
                          swiperPreviewRef.current?.slideToLoop(targetIndex)
                          setSwiperDragStatus(true)
                          setCurrent(targetIndex)
                        }}
                      >
                        <span>{item.heading}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="right">
                <ViewContainer>
                  <Swiper
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    onSlideChange={(swiper) => {
                      if (current === swiper.realIndex) return;
                      if (swiperDragStatus) return;

                      if (swiper.swipeDirection === 'next') {
                        swiperPreviewRef.current?.slideNext()
                        setCurrent(swiper.realIndex)
                      } else if (swiper.swipeDirection === 'prev') {
                        swiperPreviewRef.current?.slidePrev()
                        setCurrent(swiper.realIndex)
                      }
                    }}
                    onSlideChangeTransitionEnd={() => {
                      setSwiperDragStatus(false)
                    }}
                  >
                    {
                      viewItems.map((item, idx) => (
                        <SwiperSlide key={item.id}>
                          <ViewItem>
                            <ViewDescription>
                              <h3>{item.heading}</h3>
                              <p>{item.description}</p>
                            </ViewDescription>
                            <ViewImage>
                              <img src={item.imageSrc} alt={item.heading} />
                            </ViewImage>
                          </ViewItem>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </ViewContainer>
                <PreviewContainer>
                  <Swiper
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                      swiperPreviewRef.current = swiper
                    }}
                    allowTouchMove={false}
                  >
                    {
                      previewItems.map((item) => (
                        <SwiperSlide key={item.id}>
                          <PreviewItem>
                            <img src={item.imageSrc} alt={item.heading} draggable="false" />
                          </PreviewItem>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </PreviewContainer>
              </div>
            </DeskTopContents>
          ) : (
            <MobileContents>
              <ul>
                <li>
                  <div className="info">
                    <span>Vision</span>
                    <p>케듀올은 AI 기반 맞춤형 학습 시스템으로 누구나 쉽게 한국어를 배우고, 한국 문화를 이해하며, 언어 장벽을 낮추고 교육의 질을 높이는 교육 환경을 제공합니다.</p>
                  </div>
                  <div className="img">
                    <img src="/images/about-banner-01.png" alt="Vision" />
                  </div>
                </li>
                <li>
                  <div className="info">
                    <span>Core Value</span>
                    <p>KEDUALL은 혁신과 신뢰를 바탕으로 AI 맞춤 학습을 통해 개인 역량을 강화하고, 학습자와 강사가 함께 성장하는 글로벌 교육 플랫폼을 지향합니다.</p>
                  </div>
                  <div className="img">
                    <img src="/images/about-banner-02.png" alt="Core Value" />
                  </div>
                </li>
                <li>
                  <div className="info">
                    <span>Business Strategy</span>
                    <p>KEDUALL은 AI를 활용한 맞춤 학습과 K-컬처 연계 프로그램으로 언어 교육을 넘어 커리어 기회를 제공하며, 사용자 중심의 혁신 플랫폼으로 성장합니다.</p>
                  </div>
                  <div className="img">
                    <img src="/images/about-banner-03.png" alt="Business Strategy" />
                  </div>
                </li>
              </ul>
            </MobileContents>
          )
        }
      </Section>
    </MainAboutContainer>
  );
};

const MainAboutContainer = styled.div`
  padding: 80px 36px 80px;
  background-color: #f4f4f4;

  @media screen and (min-width: 768px) {
    padding: 100px 46px 100px;
  }

  @media screen and (min-width: 1024px) {
    padding: 160px 80px 160px;
  }
`

const DeskTopContents = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;

  .left ul {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 24px;

    li {
      font-size: 24px;
      font-weight: 600;
      cursor: pointer;
      word-break: keep-all;

      span {
        color: var(--disabled);
        position: relative;
        cursor: pointer;
        transition: color 0.3s ease;

        &::after {
          content: '';
          display: block;
          width: 0%;
          height: 2px;
          background-color: var(--secondary);
          position: absolute;
          bottom: -7px;
          left: 0;
          transition: width 0.3s ease-in-out;
        }
      }
    }
    li.active,
    li:hover {
      span {
        color: var(--secondary);

        &::after {
          width: 100%;
        }
      }
    }
  }
  .right {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 5%;
    margin-right: -20%;
  }


`;

const ViewContainer = styled.div`
  width: 70%;
`;

const ViewItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`

const ViewDescription = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 26px;

  * {
    user-select: none;
  }

  h3 {
    font-size: 106px;
    font-weight: 600;
    color: var(--primary);
  }
  p {
    width: 400px;
    font-size: 18px;
    line-height: 1.4;
    word-break: keep-all;
    margin-top: 66px;
  }

  &::before {
    content: '';
    width: 62%;
    height: 1px;
    background-color: var(--primary);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  &::after {
    content: '';
    width: 62%;
    height: 1px;
    background-color: var(--primary);
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const ViewImage = styled.div`
  width: 40%;

`;

const PreviewContainer = styled.div`
  width: 22%;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const PreviewItem = styled.div`
  user-select: none;

  img {
    user-select: none;
    -webkit-user-drag: none; /* Safari, Chrome */
    user-drag: none; /* Standard */
    pointer-events: none; /* 이미지 자체에 대한 마우스 이벤트 비활성화 (필요한 경우) */
  }
`;

const MobileContents = styled.div`
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 64px;

    li {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      overflow: hidden;
      position: relative;

      .info {
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 14px 20px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 2;

        p {
          font-size: 146x;
          line-height: 1.4;
          word-break: keep-all;
        }
      }

      span {
        font-size: 18px;
        font-weight: 500;
        color: #333333;
      }
      
      .img {
        width: 246px;
        
        img {
          height: 100%;
        }
      }
    }    
  }

  @media screen and (max-width: 410px) {
    .info {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  @media screen and (max-width: 640px) {
    li {
      height: 140px;

      .info {
        width: 100%;
      }
      img {
        visibility: hidden;
      }
    }
  }
  @media screen and (min-width: 640px) {
    span {
      font-size: 24px;
    }

    .info {
      width: 50%;
    }
    width: 100%;
  }
`;

export default MainAbout;