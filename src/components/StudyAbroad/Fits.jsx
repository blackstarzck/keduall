import styled from 'styled-components';
import { studyAbroadItems } from '../../data/sectionItems';
import ContentsContainer from '../Layouts/ContentsContainer';
import SectionContainer from '../Layouts/SectionContainer';
import TitleContainer from '../Layouts/TitleContainer';

const Fits = () => {
  return (
    <SectionContainer className={`md:pt-[134px]`}>
      <TitleContainer contentsName="fits" />
      <StyledContentsContainer className={`flex flex-col gap-[30px]`}>
        {
          studyAbroadItems.fits.items.map((item, index) => (
            <Item key={index} className="flex gap-[30px] items-center p-[30px] rounded-[20px] shadow-xl">
              <div className={`icon-container w-[143px] h-[143px] rounded-full flex-center bg-[${item.color}]`}>
                <img src={item.icon} alt={item.titleKR} />
              </div>
              <div className="title-container">
                <div className="flex items-center gap-[16px]">
                  {/* when fit mobile */}
                  <div className={`mobile-icon-container w-[46px] h-[46px] rounded-full flex-center bg-[${item.color}]`}>
                    <img src={item.icon} alt={item.titleKR} />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <span className={`title-kr font-normal text-[--primary]`}>{item.titleKR}</span>
                    <span className={`title-en font-semibold text-[--primary] tracking-[-0.6px] leading-[1.2]`}>{item.titleEN}</span>
                    </div>
                </div>
                <div className="mt-[16px]">
                  {
                    item.description.map((desc, index) => (
                      <div key={index} className="flex gap-[6px]">
                        <span className="inline-block min-w-[84px] leading-[1.7]">{desc.heading} :</span>
                        <p className="inline-block leading-[1.7]">{desc.info}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </Item>
          ))
        }
      </StyledContentsContainer>
    </SectionContainer>
  )
}

const StyledContentsContainer = styled(ContentsContainer)`
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Item = styled.div`
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 255, 255, .6);
  backdrop-filter: blur(4px);
  box-shadow: var(--box-shadow);


  &:nth-child(odd) > div:first-child {
    background-color: var(--primary);
  }

  &:nth-child(even) > div:first-child {
    background-color: var(--secondary);
  }

  p {
    word-break: keep-all;
  }

  .icon-container {
    display: none;
  }
  .mobile-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    flex-shrink: 0;

    img {
      width: 26px;
    }
  }

  .title-en {
    font-size: 20px;
  }
  .title-kr {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    display: flex;

    .icon-container {
      display: flex;
    }
    .mobile-icon-container {
      display: none;
    }

    .title-en {
      font-size: 30px;
    }
    .title-kr {
      font-size: 24px;
    }
  }
`

export default Fits;
