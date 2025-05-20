import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header>
      <HeaderContainer className="header-container">
        <Logo><NavLink to="/"></NavLink></Logo>
          <GnbNav>
            <GnbList className="gnb-list">
              <li>
                <NavLink to="/company">COMPANY</NavLink>
                <SnbList>
                  <li><NavLink  to="/company/about">회사소개</NavLink ></li>
                  <li><NavLink  to="/company/value">핵심가치</NavLink ></li>
                  <li><NavLink  to="/company/vision">비전</NavLink ></li>
                  <li><NavLink  to="/company/history">연혁</NavLink ></li>
                </SnbList>
              </li>
              <li>
                <NavLink  to="/service">SERVICE</NavLink>
                <SnbList>
                  <li><NavLink to="/service/language">한국어 강의</NavLink></li>
                  <li><NavLink to="/service/ai">AI 학습</NavLink></li>
                  <li><NavLink to="/service/study">유학 및 취업 지원</NavLink></li>
                </SnbList>
              </li>
              <li>
                <NavLink to="/career">CAREER</NavLink>
                <SnbList>
                  <li><NavLink to="/career/talent">인재상</NavLink></li>
                  <li><NavLink to="/career/process">채용절차</NavLink></li>
                  <li><NavLink to="/career/department">채용부문</NavLink></li>
                  <li><NavLink to="/career/notice">채용채용공고</NavLink></li>
                </SnbList>
              </li>
              <li>
                <NavLink to="/resources">RESOURCES</NavLink>
                <SnbList>
                  <li><NavLink to="/resources/press">보도자료</NavLink></li>
                  <li><NavLink to="/resources/blog">블로그</NavLink></li>
                  <li><NavLink to="/resources/sns">SNS</NavLink></li>
                </SnbList>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </GnbList>
          </GnbNav>
      </HeaderContainer>
    </header>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  padding: 0 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
`;

const Logo = styled.h1`
  display: block;
  width: 150px;
  height: 50px;

  a {
    display: block;
    width: 100%;
    height: 50px;
    background-image: url("/images/keduall_dark.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;


const GnbNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

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

  &:hover {
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
`;

const GnbList = styled.ul`
  width: 100%;
  display: flex;
  gap: 5px;
  padding: 40px 0;

  & > li {
    position: relative;
    width: calc(100% / 5);
    text-align: center;

    & > a {
      color: #FFFFFF;
      font-size: 18px;
      transition: all .3s ease;
    }

    &:hover {
      & > a {
        color: var(--primary) !important  ;
      }
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

export default Header;