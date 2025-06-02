import styled from 'styled-components';

const ContentsContainer = ({children, className}) => {
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 948px;
  }
`

export default ContentsContainer;
