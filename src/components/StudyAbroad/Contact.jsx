import styled from 'styled-components';
import { studyAbroadItems } from '../../data/sectionItems';
import SectionContainer from '../Layouts/SectionContainer';
import TitleContainer from '../Layouts/TitleContainer';

const Contact = () => {
  return (
    <SectionContainer className="flex-col">
      <TitleContainer contentsName="contact" />

      <div className="flex flex-col gap-[42px] md:flex-row md:gap-[160px] md:mt-[160px]">
        {
          studyAbroadItems.contact.items.map((item, index) => (
            <div key={index} className="flex flex-col gap-[6px] md:gap-[16px]">
              <span className="tex-[22px] md:text-[34px] font-semibold text-[--primary]">{item.country}</span>
              <span className="tex-[16px] md:text-[24px]">{item.phone}</span>
              <span className="tex-[16px] md:text-[24px]">{item.email}</span>
            </div>
          ))
        }
      </div>
    </SectionContainer>
  )
}

const Container = styled.article`

`

export default Contact;
