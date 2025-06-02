import styled from 'styled-components';
import SectionContainer from '../components/Layouts/SectionContainer';
import Contact from '../components/StudyAbroad/Contact';
import Fits from '../components/StudyAbroad/Fits';
import Introduction from '../components/StudyAbroad/Introduction';
import MainBanner from '../components/StudyAbroad/MainBanner';
import Programs from '../components/StudyAbroad/Programs';
import Why from '../components/StudyAbroad/Why';
import World from '../components/StudyAbroad/World';


const StudyAbroad = () => {
  return (
    <Container>
      <MainBanner />
      <Introduction />
      <Why />
      <Fits />
      <SectionContainer>
        <img src="/images/study-abroad-banner-02.png" alt="유학" />
      </SectionContainer>
      <Programs />
      <World />
      <Contact />
    </Container>
  )
}

const Container = styled.section`
`

export default StudyAbroad;
