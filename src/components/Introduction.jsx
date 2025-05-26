import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger) // ScrollTrigger 플러그인 등록

const Introduction = () => {
  const brandRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.intro-container',
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        let tl = gsap.timeline();

        tl.to(brandRef.current, {
          x: '1%',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.inOut',
        })
        .to(introRef.current, {
          x: '-1%',
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        }, "-=0.3")
      },
      once: true,
      // markers: true,
    })
  }, [])

  return (
    <IntroductionContainer className="intro-container">
      <Brand>
        <h3 ref={brandRef} className="opacity-0">KeduAll</h3>
      </Brand>
      <div ref={introRef} className="brand-desc-wrap opacity-0">
        <div className="brand-desc">Shaping the future of </div>
        <div className="brand-desc">Korean education</div>
      </div>
    </IntroductionContainer>
  );
};

const IntroductionContainer = styled.div`
  width: 100%;
  padding: 32px 0;

  .brand-desc {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    margin-top: 12px;

    &:first-child {
      color: var(--text-black);
      margin-right: 8px;
    }
    &:last-child {
      color: var(--secondary)
    }
  }

  @media screen and (max-width: 410px) {
    .brand-desc-wrap {
      text-align: center;
    }
  }
  
  @media screen and (min-width: 410px) {
    .brand-desc {
      font-size: 22px;
    }
    .brand-desc-wrap {
      text-align: right;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 32px 46px 32px 0;

    .brand-desc {
      font-size: 40px;
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 86px 0;
    
    .brand-desc {
      margin-top: 30px;
      font-size: 60px;
    }
  }
`;

const Brand = styled.div`
  padding-left: 32px;

  @media screen and (max-width: 410px) {
    padding-left: 0;
    display: flex;
    justify-content: center;
  }

  h3 {
    display: inline-block;
    font-weight: 700;
    line-height: 1;
    color: var(--primary);
    letter-spacing: 1px;
    position: relative;
    opacity: 0;

    &::before {
      content: '';
      display: block;
      background-color: #FFCD85;
      border-radius: 50%;
      position: absolute;
      transform: translateY(-50%);
      z-index: -1;
      width: 24px;
      height: 24px;
      left: -5px;
      top: 7px;
    }

    font-size: 24px;



    @media screen and (min-width: 410px) {
      font-size: 42px;

      &::before {
        width: 45px;
        height: 45px;
        left: -11px;
        top: 10px;
      }
    }

    @media screen and (min-width: 768px) {
      font-size: 64px;

      &::before {
        width: 66px;
        height: 66px;
        left: -12px;
        top: 16px;
      }
    }

    @media screen and (min-width: 1024px) {
      font-size: 120px;
      &::before {
        width: 128px;
        height: 128px;
        left: -30px;
        top: 30px;
      }
    }
  }
`;

export default Introduction;