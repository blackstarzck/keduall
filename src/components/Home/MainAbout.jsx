import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { mainItems } from "../../data/sectionItems";
import useDeviceType from "../../hooks/useDeviceType";
import Section from "./Section";

const MainAbout = () => {
  const [current, setCurrent] = useState(0);
  const [swiperDragStatus, setSwiperDragStatus] = useState(false);
  const swiperRef = useRef(null);
  const swiperPreviewRef = useRef(null);
  const deviceType = useDeviceType();
  const { props, viewItems, previewitems } = mainItems.mainAbout;

  useEffect(() => {
    // console.log("deviceType: ", deviceType);
  }, [deviceType]);

  return (
    <MainAboutContainer id="about">
      <Section {...props}>
        {deviceType === "desktop" ? (
          <DeskTopContents>
            <div className="left">
              <ul>
                {viewItems.map((item) => (
                  <li
                    key={item.id}
                    className={current === item.id - 1 ? "active" : ""}
                    onClick={() => {
                      const targetIndex = item.id - 1;
                      swiperRef.current?.slideToLoop(targetIndex);
                      swiperPreviewRef.current?.slideToLoop(targetIndex);
                      setSwiperDragStatus(true);
                      setCurrent(targetIndex);
                    }}
                  >
                    <span>{item.heading}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right">
              <ViewContainer>
                <Swiper
                  loop={true}
                  spaceBetween={0}
                  slidesPerView={1}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  onSlideChange={(swiper) => {
                    if (current === swiper.realIndex) return;
                    if (swiperDragStatus) return;

                    if (swiper.swipeDirection === "next") {
                      swiperPreviewRef.current?.slideNext();
                      setCurrent(swiper.realIndex);
                    } else if (swiper.swipeDirection === "prev") {
                      swiperPreviewRef.current?.slidePrev();
                      setCurrent(swiper.realIndex);
                    }
                  }}
                  onSlideChangeTransitionEnd={() => {
                    setSwiperDragStatus(false);
                  }}
                >
                  {viewItems.map((item, idx) => (
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
                  ))}
                </Swiper>
              </ViewContainer>
              <PreviewContainer>
                <Swiper
                  loop={true}
                  spaceBetween={0}
                  slidesPerView={1}
                  onSwiper={(swiper) => {
                    swiperPreviewRef.current = swiper;
                  }}
                  allowTouchMove={false}
                >
                  {previewitems &&
                    previewitems.map((item) => (
                      <SwiperSlide key={item.id}>
                        <PreviewItem>
                          <img
                            src={item.imageSrc}
                            alt={item.heading}
                            draggable="false"
                          />
                        </PreviewItem>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </PreviewContainer>
            </div>
          </DeskTopContents>
        ) : (
          <MobileContents>
            <ul>
              {viewItems.map((item, idx) => (
                <li key={item.id}>
                  <div className="info">
                    <span>{item.heading}</span>
                    <p>{item.description}</p>
                  </div>
                  <div className="img">
                    <img src={item.imageSrc} alt={item.heading} />
                  </div>
                </li>
              ))}
            </ul>
          </MobileContents>
        )}
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
`;

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
          content: "";
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
`;

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
    content: "";
    width: 62%;
    height: 1px;
    background-color: var(--primary);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
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
    content: "";
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
