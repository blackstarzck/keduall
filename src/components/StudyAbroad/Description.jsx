import styled from 'styled-components';

const Description = ({highlight, description}) => {
  return (
    <Container>
      <strong>{highlight}</strong>
      {description}
    </Container>
  )
}

const Container = styled.div`
  font-size: 26px;
  padding-right: 26px;

  strong {
    font-weight: 600;
    line-height: 1.4;
    color: var(--secondary);
  }
  p {
    line-height: 1.4;
  }


  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
  
  }
`

export default Description;
