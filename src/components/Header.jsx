import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import styled from 'styled-components';
import { useMenu } from '../contexts/MenuContext';
import { menuItems } from '../data/menuItems';
import MobileMenuContainer from './Home/MobileMenuContainer';

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();
  const gnbNavRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHover(true);
    }

    const handleMouseLeave = () => {
      setIsHover(false);
    }

    gnbNavRef.current?.addEventListener('mouseenter', handleMouseEnter);
    gnbNavRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      gnbNavRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      gnbNavRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, []);

  // URL 해시 변경 시 스크롤 처리
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      console.log('앵커 시도:', location.hash, '찾을 ID:', elementId);
      const element = document.getElementById(elementId);
      if (element) {
        console.log('요소 찾음:', element);
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100)
      } else {
        console.warn('해당 ID의 요소를 찾을 수 없습니다:', elementId);
      }
    }
  }, [location]); // location 변경 시 실행

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // location.pathname 변경 시 실행

  return (
    <header>
      <HeaderContainer className={ isMenuOpen ? 'mobile-menu-open' : '' }>
        <GnbNav ref={gnbNavRef}>
          <GnbList className="gnb-list">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    location.hash === item.path || (item.path === '/' && location.pathname === '/')
                      ? 'active'
                      : ''
                  }
                >
                  {item.title}
                </NavLink>
                {item.subItems.length > 0 && (
                  <SnbList>
                    {item.subItems.map((subItem, idx) => (
                      <li key={idx}>
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            location.hash === subItem.path ? 'active' : ''
                          }
                        >
                          {subItem.title}
                        </NavLink>
                      </li>
                    ))}
                  </SnbList>
                )}
              </li>
            ))}
          </GnbList>
        </GnbNav>
        {/* 로고 */}
        <Logo>
          <NavLink to="/">
            <img src={(isHover || isMenuOpen) ? "/images/logo_dark.png" : "/images/logo_white.png"} alt="케듀올 로고" />
          </NavLink>
        </Logo>
        <MenuButton
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <img src={isMenuOpen ? "/icons/close-dark.svg" : "/icons/menu-white.svg"} alt="메뉴" />
        </MenuButton>
        <MobileMenuContainer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </HeaderContainer>
    </header>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(96, 97, 119, .4);
  backdrop-filter: blur(10px);

  &.mobile-menu-open h1 a {
    background-image: url("/images/logo_dark.png");
  }
`;

const Logo = styled.h1`
  display: block;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  max-width: 150px;

  a {
    display: block;
    width: 100%;
    // height: 50px;

    img {
      // height: 100%;
      transition: all .3s ease;
    }



    @media screen and (max-width: 768px) {
      height: 36px;

      img {
        height: 100%;
      }
    }
  }



  @media screen and (min-width: 1024px) {
    // height: 50px;
    left: 46px;
  }
`;


const GnbNav = styled.nav`
  width: 60%;
  height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: #fff;
    z-index: -1;
    transition: all .3s ease;
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      overflow: visible;

      &::after {
        height: calc(100vh / 2);
        transition: all .3s ease;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      }

      ul {
        opacity: 1;

        li a {
          color: var(--text-default);
        }
      }
    }
  }
`;

const GnbList = styled.ul`
  width: 100%;
  display: none;
  align-items: center;
  gap: 5px;

  & > li {
    position: relative;
    width: calc(100% / 4);
    text-align: center;

    & > a {
      color: #FFFFFF;
      font-weight: 500;
      font-size: 18px;
      transition: all .3s ease;
    }

    &:hover {
      & > a {
        color: var(--primary) !important  ;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    & {
      display: flex;
    }
  }
`;

const SnbList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: max-content;
  padding-top: 72px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: all .3s ease;

  li {
    word-break: keep-all;
  }
`;

const MenuButton = styled.button`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-16px, -50%);
  z-index: 100;

  @media screen and (min-width: 1024px) {
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 1024px) {
    & {
      display: none;
    }
  }
`;

export default Header;
