import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Description from './Description';

const Section = ({ heading, description, children }) => {
  return (
    <SectionContainer>
      <Top>
        <Heading>{heading}</Heading>
        <Description>
          {description}
        </Description>
      </Top>
      {children}
    </SectionContainer>
  )
};

const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const Top = styled.div`
  // padding: 0 46px;
`

export default Section;