import styled from 'styled-components';
import { studyAbroadItems } from '../../data/sectionItems';

const Introduction = () => {
  return (
    <Container>
      <h2>{studyAbroadItems.introduction.title}</h2>
      <div className="introduction-text">
        {studyAbroadItems.introduction.description}
      </div>
      <div className="btn-container mt-[24px] md:mt-[64px]">
        <Button onClick={() => { alert('준비중입니다.') }} className=""><span>상담신청</span><i></i></Button>
        {/* <Button>자세히 보기</Button> */}
      </div>
      <div className="introduction-image">
        <img src={studyAbroadItems.introduction.image[0]} alt="유학 소개 이미지" />
      </div>
    </Container>
  )
}

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 6px;
  font-size: 26px;
  font-weight: 700;
  color: var(--primary);
  border-bottom: 3px solid var(--primary);
  transition: all .3s ease-in-out;

  i {
    width: 36px;
    height: 36px;
    background-image: url('/icons/arrow-big-right-primary.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: all .3s ease-in-out;
  }

  &:hover {
    background-color: var(--primary);
    color: #FFFFFF;
    i {
      transform: translateX(6px);
      background-image: url('/icons/arrow-big-right-white.svg');
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;
    i {
      width: 24px;
      height: 24px;
    }
    border-bottom-width: 2px;
  }
  @media (min-width: 768px) {
    padding: 16px 20px;
  }
`;

const Container = styled.article`
  width: 100%;

  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: -.6px;
  }

  .introduction-image{
    margin-top: 100px;
    position: relative;

    .introduction-image-text {
      position: absolute;
      bottom: 14px;
      right: 40px;
      display: flex;
      gap: 24px;
    }
  }

  padding: 32px 32px 84px 32px;

  @media (max-width: 768px) {
    h2  {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
  @media (min-width: 768px) {
    padding: 160px 160px 197px 160px;

    h2 {
      font-size: 60px;
    }
  }
`;

export default Introduction;
