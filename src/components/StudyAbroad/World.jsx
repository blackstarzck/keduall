import styled from "styled-components";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { studyAbroadItems } from '../../data/sectionItems';

const World = () => {
  return (
    <Container className="!pb-0 mb-[86px] md:mb-[197px]">
      <div className="img-container w-full h-[50vh] md:h-screen bg-[url('/images/world-map.png')] bg-contain bg-center bg-no-repeat">
        {/* <img className="w-full" src="/images/world-map.png" alt="세계 지도" /> */}
      </div>
      <LoopContents>
        <Swiper
          loop={true}
          loopAdditionalSlides={1}
          spaceBetween={18}
          slidesPerView={'auto'}
          observeParents={true}
          observer={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false
          }}
          speed={4000}
          modules={[Autoplay]}
        >
          {
            studyAbroadItems.countries.map((item, index) => <StyledSwiperSlide>
              <Item className="flex items-center gap-4">
                <div className="flag">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="country-info">
                  <div className="country text-[20px] font-semibold">{item.name}</div>
                  <div className="service flex gap-4 mt-2">
                    {
                      item.service.map((service, index) => (
                        <div key={index} className="flex items-center">
                          {/* <i><img src={service.icon} alt={service.name} /></i> */}
                          <span className="text-[#94A3B8]">{service.name}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </Item>
            </StyledSwiperSlide>
            )
          }
        </Swiper>
      </LoopContents>
    </Container>
  )
}

const Container = styled.article`
  position: relative;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: auto;
  padding: 6px 0;

  .flag img {
  width: 46px;
  }
`;

const LoopContents = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 6px 0;

  .swiper-wrapper {
    transition-timing-function: linear;
  }
`;

const Item = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  // box-shadow: var(--box-shadow);
  border: 1px solid #E2E8F0;
  border-radius: 10px;

  & * {
    user-select: none;
  }

  .service > div:not(:last-child) span {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -8px;
      bottom: 0;
      margin: auto;
      width: 1px;
      height: 80%;
      background-color:rgb(201, 209, 219);w
    }
  }


  @media (min-width: 768px) {
    padding: 26px;
  }
  @media (max-width: 768px) {
    padding: 16px;

    .flag img {
      width: 40px;
      height: 40px;
    }

    .country-info .country {
      font-size: 16px;
    }
    .service span {
      font-size: 14px;
    }
  }
`;

export default World;
