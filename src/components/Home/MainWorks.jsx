import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { mainItems } from '../../data/sectionItems';
import useDeviceType from '../../hooks/useDeviceType';
import Section from './Section';

gsap.registerPlugin(ScrollTrigger) // ScrollTrigger 플러그인 등록

const MainWorks = () => {
  const deviceType = useDeviceType();
  const { props, viewItems } = mainItems.mainWorks;

  useEffect(() => {
    // console.log("deviceType: ", deviceType);

  }, [deviceType])

  useEffect(() => {
    if (deviceType === 'desktop') {
      ScrollTrigger.create({
        trigger: '.main-works-list',
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          gsap.fromTo('.main-works-list li', {
            opacity: 0,
            y: -20,
          }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.inOut',
            stagger: 0.2,
          });

          const imgBox = document.querySelectorAll('.img');
          imgBox.forEach(item => {
            gsap.to(item, {
              height: '20rem',
              duration: 0.2,
              ease: 'power2.inOut',
            }, "<");
          })
        },
        once: true,
        // markers: true,
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <MainWorksContainer id="work">
      <Section {...props}>
        {
          deviceType === 'desktop' ? (
            <DeskTopContents>
              <ul className="main-works-list">
                {
                  viewItems.map((item, index) => (
                    <li key={index}>
                      <div className="img-container">
                        <div className="img">
                          <img src={item.src} alt="works" />
                        </div>
                      </div>
                      <div className="intro-container">
                        {item.heading}
                        {item.description}
                      </div>
                    </li>
                  ))
                }
              </ul>
            </DeskTopContents>
          ): (
            <MobileContents>
              <ul>
                {
                  viewItems.map((item, index) => (
                    <li key={index}>
                      <div className="img-container">
                        <div className="img">
                          <img src={item.src} alt={item.heading} />
                        </div>
                      </div>
                      <div className="intro-container">
                        {item.heading}
                        {item.description}
                      </div>
                    </li>
                  ))
                }
              </ul>
            </MobileContents>
          )
        }
      </Section>
    </MainWorksContainer>
  )
}

const MainWorksContainer = styled.div`
  padding: 80px 36px 80px;

  @media screen and (min-width: 768px) {
    padding: 100px 46px 100px;
  }

  @media screen and (min-width: 1024px) {
    padding: 160px 80px 160px;
  }
`

const DeskTopContents = styled.div`
  margin-top: 120px;

  ul {
    display: flex;
  }

  li {
    width: calc(100% / 4);
    opacity: 0;
    position: relative;

    &:not(:last-child)::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background-color: #cecece;
    }

    .img-container {
      width: 100%;
      height: 20rem;

      .img {
        width: 100%;
        // height: 20rem;
        overflow: hidden;
        margin: auto;
        transition: all 0.3s ease;
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: fit-content;
          height: 24rem;
        }
      }
    }

    .intro-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      padding-top: 18px;

      .heading {
        text-align: center;

        span {
          display: block;
          font-size: 26px;
          line-height: 1.2;
          font-weight: 600;
          color: var(--primary);
        }
      }

      p {
        text-align: center;
        font-size: 16px;
        line-height: 1.6;
        word-break: keep-all;
      }
    }
  }

  @media screen and (max-width: 1536px) {
  }

  @media screen and (min-width: 1536px) {
    .img-container:hover .img {
      width: 20rem;
      border-radius: 50%;
    }
  }
`

const MobileContents = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 120px;

    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 26px;

      .intro-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      span {
        display: inline-block;
        font-size: 26px;
        line-height: 1.2;
        font-weight: 600;
        color: var(--primary);

        &:not(:last-child) {
          margin-right: 10px;
        }
      }

      p {
        font-size: 16px;
        line-height: 1.6;
        word-break: keep-all;
      }
    }
  }
  @media screen and (max-width: 410px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
    .heading span {
      font-size: 16px;
    }
    .heading + div p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      margin-top: 42px;
    }

    li {
      background-color: #f7f7f7;
      border-radius: 12px;
    }

    .img-container {
      display: none;
    }
    .intro-container {
      padding: 24px 0 24px 24px;

      .heading {
        display: flex;
        flex-direction: column;
      }
    }

    .heading span {
      font-size: 18px;
    }
    .heading + div p {
      font-size: 16px;
    }
  }
`

export default MainWorks;
