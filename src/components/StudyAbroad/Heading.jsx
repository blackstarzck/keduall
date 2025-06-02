import styled from 'styled-components';

const Heading = ({title}) => {
  return (
    <Container>{title}</Container>
  )
}

const Container = styled.h3`
  font-size: 46px;
  line-height: 1.6;
  letter-spacing: -.6px;
  font-family: 'Bebas Neue', sans-serif;
  color: var(--text-section-title);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
export default Heading;
