import React from 'react';
import styled from 'styled-components';

const Heading = ({ children }) => {
  return <HeadingContainer>{children}</HeadingContainer>;
};

const HeadingContainer = styled.h3`
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 1px;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    background-color: #FFCD85;
    border-radius: 50%;
    top: -11px;
    left: -9px;
    width: 30px;
    height: 30px;
  }
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 32px;

    &::before {
      top: -17px;
      left: -15px;
      width: 42px;
      height: 42px;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 22px;
    margin-bottom: 46px;

    &::before {
      top: -23px;
      left: -21px;
      width: 53px;
      height: 53px;
    }
  }
`;

export default Heading;