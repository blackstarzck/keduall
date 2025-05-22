import React from 'react';
import styled from 'styled-components';

const Description = ({ children }) => {
  return <DescriptionContainer>{children}</DescriptionContainer>;
};

const DescriptionContainer = styled.div`
  font-size: 42px;
  font-weight: 500;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Description;