import styled from 'styled-components';
import { studyAbroadItems } from '../../data/sectionItems';
import Description from '../StudyAbroad/Description';
import Heading from '../StudyAbroad/Heading';

const TitleContainer = ({contentsName}) => {
  return (
    <Container className="w-[100%] md:w-[470px]">
      <Heading title={studyAbroadItems[contentsName].title} />
      <Description highlight={studyAbroadItems[contentsName].highlight} description={studyAbroadItems[contentsName].description} />
    </Container>
  )
}

const Container = styled.div`
 margin-bottom: 64px;
`

export default TitleContainer;
