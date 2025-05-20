import React from 'react';
import styled from 'styled-components';

const Description = ({ children }) => {
  return <DescriptionContainer>{children}</DescriptionContainer>;
};

const DescriptionContainer = styled.div`
  font-size: 42px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Description;