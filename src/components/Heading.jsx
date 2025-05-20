import React from 'react';
import styled from 'styled-components';

const Heading = ({ children }) => {
  return <HeadingContainer>{children}</HeadingContainer>;
};

const HeadingContainer = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: var(--primary);
  letter-spacing: 1px;
  margin-bottom: 46px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -23px;
    left: -21px;
    z-index: -1;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background-color: #FFCD85;
  }
`;

export default Heading;