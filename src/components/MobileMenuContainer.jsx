import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { menuItems } from '../data/menuItems';
import { NavLink } from 'react-router';

const MobileMenuContainer = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);
  const accordionRefs = useRef([]);

  useEffect(() => {
    gsap.to(menuRef?.current, {
      right: isMenuOpen ? 0 : '-100%',
      duration: 0.5,
      ease: 'power2.inOut',
    })
  }, [isMenuOpen]);

  useEffect(() => {
    accordionRefs.current.forEach((el, idx) => {
      if (el) {
        gsap.to(el, {
          height: openIndex === idx ? 'auto' : 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
    });
  }, [openIndex, accordionRefs]);

  const toggleAccordion = (index) => {
    // 클릭한 인덱스가 이미 열려 있으면 닫고, 아니면 새 인덱스로 설정
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    
    gsap.to(menuRef.current, {
      right: '-100%',
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        setOpenIndex(null); // Close all accordion panels

      },
    });
  };

  return (
    <MenuContainer ref={menuRef}>
      <GnbNav>
        <GnbList className="gnb-list">
          {menuItems.map((item, idx) => (
            <li key={idx} className={item.subItems.length === 0 ? 'no-arrow' : ''}>
              <AccordionHeader onClick={() => toggleAccordion(idx)} $isOpen={openIndex === idx}>
                <span>{item.title}</span>
              </AccordionHeader>
              {item.subItems.length > 0 && (
                <AccordionBody ref={(el) => (accordionRefs.current[idx] = el)}>
                  <SnbList>
                    {item.subItems.map((subItem, idx) => (
                      <li key={idx}>
                        <NavLink to={subItem.path} onClick={handleNavLinkClick}>{subItem.title}</NavLink>
                      </li>
                    ))}
                  </SnbList>
                </AccordionBody>
              )}
            </li>
          ))}
        </GnbList>
      </GnbNav>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 50;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const GnbNav = styled.nav`
  padding: 0 40px;
  height: 80%;
`

const GnbList = styled.ul`
  li.no-arrow > div::after{
    display: none;
  }
`

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 15px 0;
  
  span {
    font-weight: 600;
    font-size: 24px;
  }

  &::after {
    content: "";
    display: block;
    width: 26px;
    height: 26px;
    background-image: url("/icons/chevron-down.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const AccordionBody = styled.div`
  overflow: hidden;
  height: 0; 
`;

const SnbList = styled.ul`
  padding: 0 26px;
  background-color: #F5F5F5;

  & > li {
    & > a {
      display: block;
      font-weight: 500;
      font-size: 16px;
      color: #666666;
      padding: 15px 0;
    }
  }
`;

export default MobileMenuContainer;