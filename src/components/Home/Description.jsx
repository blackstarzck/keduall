import React from 'react';
import styled from 'styled-components';

const Description = ({ children }) => {
  return <DescriptionContainer>{children}</DescriptionContainer>;
};

const DescriptionContainer = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 640px) {
    font-size: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 42px;
  }
`;

export default Description;