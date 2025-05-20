import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger) // ScrollTrigger 플러그인 등록

const Introduction = () => {
  const subTitleRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
      gsap.to(subTitleRef.current, {
        scrollTrigger: {
          trigger: '.intro-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          // markers: true,
        },
        x: '1%',
        opacity: 1,
        duration: 1,
      })
      gsap.to(introRef.current, {
        scrollTrigger: {
          trigger: '.intro-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          // markers: true,
        },
        x: '-1%',
        opacity: 1,
        duration: 1,
      })
  }, [])

  return (
    <IntroductionContainer className="intro-container">
      <SubTitle ref={subTitleRef} className="opacity-0 pl-[86px]">KeduAll</SubTitle>
      <div ref={introRef} className="text-right opacity-0 pr-[70px]">
        <div className="inline-block text-[var(--text-black)] mr-2">Shaping the future of </div>
        <div className="inline-block text-[var(--secondary)]">Korean education</div>
      </div>
    </IntroductionContainer>
  );
};

const IntroductionContainer = styled.div`
  width: 100%;
  padding: 86px 0;

  div {
    font-size: 50px;
    font-weight: 500;
    letter-spacing: -2px;
    word-spacing: 2px;
  }
`;

const SubTitle = styled.h3`
  display: block;
  font-size: 90px;
  font-weight: 700;
  line-height: 1;
  color: var(--primary);
  letter-spacing: 1px;
  position: relative;
  opacity: 0;

  &::before {
    content: '';
    display: block;
    width: 108px;
    height: 108px;
    background-color: #FFCD85;
    border-radius: 50%;
    position: absolute;
    left: 54px;
    top: 20px;
    transform: translateY(-50%);
    z-index: -1;
  }
`;

export default Introduction;