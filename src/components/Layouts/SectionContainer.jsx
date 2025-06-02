import styled from 'styled-components';

const SectionContainer = ({children, className}) => {
  return (
    <Container className={className}>
      {children}
  </Container>
  )
}

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 86px;
  gap: 24px;
  position: relative;

  @media (min-width: 768px) {
    padding-bottom: 197px;
  }
  @media (min-width: 1024px) {
    padding-left: 160px;
    padding-right: 160px;
    // padding-bottom: 197px;
  }
`

export default SectionContainer;
