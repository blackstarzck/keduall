import styled from 'styled-components';
import { studyAbroadItems } from '../../data/sectionItems';
import ContentsContainer from '../Layouts/ContentsContainer';
import SectionContainer from '../Layouts/SectionContainer';
import TitleContainer from '../Layouts/TitleContainer';

const Why = () => {
  return (
    <SectionContainer className="md:pt-[134px]">
      <TitleContainer contentsName="why"/>
      <StyledContentsContainer className="flex flex-row justify-center items-center">
        <div className=" md:w-[948px] flex justify-center md:justify-between">
          {
            studyAbroadItems.why.items.map((item, index) => (
              <Item key={item.id} className={`relative w-[300px] h-[300px] rounded-full border-[4px]`}>
                <div className="w-full absolute-center text-center flex flex-col gap-[24px] px-[18px] md:px-[54px]">
                  <span className={`text-[20px] font-semibold text-[${item.color}]`}>{item.title}</span>
                  <p className="text-[30px] font-semibold leading-[1.4] word-break-keep">{item.description}</p>
                </div>
              </Item>
            ))
          }
        </div>
      </StyledContentsContainer>
    </SectionContainer>
  )
}

const StyledContentsContainer = styled(ContentsContainer)`

  @media (max-width: 768px) {
    width: 100%;
  }

  & > div {
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 24px;
    }
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`

const Item = styled.div`
  &:nth-child(odd) {
    border-color: var(--primary);
    span {
      color: var(--primary);
    }
  }

  &:nth-child(even) {
    border-color: var(--secondary);
    span {
      color: var(--secondary);
    }
  }

  p {
    word-break: keep-all;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    border-width: 2px;

    p {
      font-size: 16px;
    }
  }
`

export default Why;
