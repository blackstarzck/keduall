import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { Swiper, SwiperSlide } from 'swiper/react';

const props = {
  heading: 'About',
  description: <>
    <span className="block">지능형 기술로 확장하는 한국어 교육</span>
    <span className="block">배움을 넘어 진로까지 연결하고</span>
    <span className="block">모두를 위한 지속 가능한 성장을 이끕니다</span>
  </>
}

const viewItems = [
  {
    heading: 'Vision',
    description: '케듀올은 전 세계 누구나 쉽고 자유롭게 한국어를 배울 수 있는 환경을 만듭니다. 우리는 AI 기반의 지능형 학습 시스템을 통해 개인 맞춤형 교육 경험을 제공하며, 단순한 언어 학습을 넘어 한국 문화와 장체성까지 함께이해하고 경험할 수 있도록 돕습니다. 언어의 장벽을 낮추고, 교육의 질을 높이며, 문화를 연결하는 것, 그것이 케듀올이 지향하는 교육의 미래입니다.',
    imageSrc: '/images/about-banner-01.png'
  },
  {
    heading: 'Core Value',
    description: 'KEDUALL은 "언어를 넘어, 미래를 연결하는 교육 플랫폼"을 지향합니다. 이는 지속 가능한 성장을 위해 개인의 역량을 강화하고, AI 기반 맞춤형 학습 솔루션을 제공하여 누구나 자신의 목표에 도달할 수 있도록 돕는다는 의미입니다. KEDUALL은 혁신과 신뢰를 핵심 가치로 삼아, 학습자와 강사가 함께 성장하는 생태계를 만들어갑니다. 열정을 바탕으로 글로벌 사회에서 새로운 가능성을 열어가는 여정을 함께합니다.',
    imageSrc: '/images/about-banner-02.png'
  },
  {
    heading: 'Business Strategy',
    description: 'KEDUALL은 "AI와 글로벌 커리어를 잇는 새로운 교육의 기준"을 제시합니다. AI 기술을 활용하여 개인별 맞춤형 학습 경험을 제공하고, 언어 교육을 넘어 실제 커리어로 이어지는 기회를 창출합니다. 또한 K-컬처 연계 프로그램을 통해 한국어와 문화를 동시에 배우는 차별화된 경험을 제공합니다. 끊임없는 플랫폼 혁신을 통해 사용자 중심의 서비스를 강화하며, 미래형 교육 플랫폼으로 성장해 나가고자 합니다',
    imageSrc: '/images/about-banner-03.png'
  }
];

const MainAbout = () => {
  return (
    <MainAboutContainer>
      <Section {...props}>
        <Container>
          <ul className="left">
            <li className="active"><span>Vision</span></li>
            <li><span>Core Value</span></li>
            <li><span>Business Strategy</span></li>
          </ul>
          <div className="right">
            <div className="view-container">
              <Swiper spaceBetween={0} slidesPerView={1}>
                {
                  viewItems.map((item) => (
                    <SwiperSlide>
                      <div>
                        <h3>{item.heading}</h3>
                        <p>{item.description}</p>
                      </div>
                      <div>
                        <img src={item.imageSrc} alt={item.heading} />
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            <PreviewContainer>
              <PreviewItem>
                <img src="/images/about-banner-02.png" alt="core value" />
              </PreviewItem>
            </PreviewContainer>
          </div>
        </Container>
      </Section>
    </MainAboutContainer>
  );
};

const MainAboutContainer = styled.div`
  padding: 160px 0 160px 80px;
`

const Container = styled.div`
  margin-top: 120px;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  .left {
    width: 20vw;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 50px;

    li {
      font-size: 24px;
      font-weight: 600;
      cursor: pointer;

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
    justify-content: end;
    gap: 5%;
    max-width: 1650px;

    .view-container {
      flex: 1;
    }
  }
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

  h3 {
    font-size: 106px;
    color: var(--primary);
  }
  p {
    width: 55%;
    font-size: 16px;
    line-height: 24px;
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
  height: 484px;
`;

const PreviewContainer = styled.div`
  width: 22%;
`;

const PreviewItem = styled.div`
`;

export default MainAbout;