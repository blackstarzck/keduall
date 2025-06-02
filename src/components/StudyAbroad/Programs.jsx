import { useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { studyAbroadItems } from "../../data/sectionItems";
import useDeviceType from "../../hooks/useDeviceType";
import ContentsContainer from "../Layouts/ContentsContainer";
import SectionContainer from "../Layouts/SectionContainer";
import TitleContainer from "../Layouts/TitleContainer";

const Programs = () => {
  const deviceType = useDeviceType();


  useEffect(() => {

    // console.log("deviceType", deviceType);

  }, [deviceType]);

  return (
    <SectionContainer className="w-full">
      <TitleContainer contentsName="programs" />
      <ContentsContainer className={"flex gap-[30px] flex-wrap justify-between"}>
        {
          deviceType !== "desktop" ? (
            <Swiper
              loop={true}
              spaceBetween={14}
              slidesPerView={'auto'}
            >
              {
                studyAbroadItems.programs.items.map((item) => (
                  <StyledSwiperSlide>
                    <Item key={item.id} className="!w-full !px-4">
                      <div className="head flex-wrap-reverse">
                        <div className="title-container">
                          <span className="title">{item.title}</span>
                          <p className="sub-title">{item.description}</p>
                        </div>
                        <div className="flag-container">
                          <img src={item.flag} alt={item.country} />
                        </div>
                      </div>
                      <div className="body">
                        {
                          item.paragraph.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
                        }
                      </div>
                    </Item>
                  </StyledSwiperSlide>
                ))
              }
            </Swiper>
          ): (
            studyAbroadItems.programs.items.map((item) => (
              <Item key={item.id}>
                <div className="head flex-wrap-reverse">
                  <div className="title-container">
                    <span className="title">{item.title}</span>
                    <p className="sub-title">{item.description}</p>
                  </div>
                  <div className="flag-container">
                    <img src={item.flag} alt={item.country} />
                  </div>
                </div>
                <div className="body">
                  {
                    item.paragraph.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
                  }
                </div>
              </Item>
            ))
          )
        }
      </ContentsContainer>
    </SectionContainer>
  )
}

const StyledSwiperSlide = styled(SwiperSlide)`
  padding: 16px 0 16px 10px;

  @media (max-width: 640px) {
    width: 80%;
  }
  @media (min-width: 640px) {
    width: calc(100% / 2);
  }
`

const Item = styled.div`
  width: calc((100% / 2) - 15px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: var(--box-shadow);

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .title {
      font-size: 18px;
      font-weight: 600;
    }
    .sub-title {
      font-size: 14px;
      font-weight: 400;
      color: var(--primary)
    }
  }
  .body {
    padding-top: 40px;
  }
  .body p {
    font-weight: 400;
    line-height: 1.6;
    word-break: keep-all;
    position: relative;
    padding-left: 10px;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  height: 100%;

  .flag-container {
    width: 46px;
    margin-bottom: 14px;
  }

  @media (min-width: 768px) {
    height: auto;

    .flag-container {
      width: 70px;
      margin-bottom: 0;
    }

    .head .title {
      font-size: 30px;
    }
    .head .sub-title {
      font-size: 20px;
    }
  }
`

export default Programs;
