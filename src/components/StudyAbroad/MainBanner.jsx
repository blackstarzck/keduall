import gsap from 'gsap';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { useMenu } from '../../contexts/MenuContext';
import { studyAbroadItems } from '../../data/sectionItems';

const MainBanner = () => {
  const { imgSrc } = useLoaderData();
  const { isMenuOpen, setIsMenuOpen  } = useMenu();

  useEffect(() => {
    if (imgSrc) {
      console.log("imgSrc: ", imgSrc)
      gsap.to('#mobile-menu-container', {
        right: '-100%',
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsMenuOpen(false);
        },
      });
    }
  }, [imgSrc])

  return (
    <Container $imgSrc={imgSrc[0]}>
      <div className="banner-text">
        <h2>{studyAbroadItems.mainBanner.title}</h2>
        <p>{studyAbroadItems.mainBanner.description}</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${({ $imgSrc }) => $imgSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;

  .banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;

    h2 {
      font-weight: 700;
      line-height: 1.6;
      position: relative;
      white-space: nowrap;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

      &::before {
        content: '';
        display: block;
        width: 105%;
        height: 40%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -18%);
        margin: 0 auto;
        background: #0F3060;
        z-index: -1;
      }
    }
    p {
      font-weight: 700;
      margin-top: 16px;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
  }
  @media (max-width: 410px) {
    .banner-text h2 {
      font-size: 34px;
    }
    .banner-text p {
      font-size: 26px;
    }
  }
  @media (min-width: 410px) {
    .banner-text h2 {
      font-size: 6vw;
    }
    .banner-text p {
      font-size: 5vw;
    }
  }
`

export default MainBanner;
