import styled from 'styled-components';

const MainContact = () => {
  return (
    <MainContactContainer id="contact">
      <Contents>
        <div className="left">
          <Heading className="title">CONTACT US</Heading>
        </div>
        <div className="right">
          <ul>
              <li>
                <span>CONTACT</span>
                <p>031 983 0000</p>
            </li>
            <li>
              <span>E-MAIL</span>
              <p>jett@keduall.com</p>
            </li>
            <li>
              <span>ADRESS</span>
              <p>경기도 김포시 태장로 755</p>
            </li>
          </ul>
        </div>
      </Contents>
    </MainContactContainer>
  );
};



const MainContactContainer = styled.div`
  padding: 0 80px 60px;

  @media screen and (max-width: 768px) {
    padding: 0 36px 60px;
  }
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;

  .left {
    width: 50%;
    border-right: 1px solid #e8e8e8;
    padding: 110px 56px 0 34px;
  }

  .right {
    padding: 46px 0 36px 36px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 62px;
    }
    
    span {
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      color: var(--primary);
      position: relative;
      z-index: 1;
      margin-bottom: 6px;

      &::before {
        content: '';
        content: '';
        display: block;
        position: absolute;
        top: -10px;
        left: -12px;
        z-index: -1;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background-color: #FFCD85;
      }
    }

    p {
      font-size: 42px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 768px) {
    border: none;
    .left {
      display: none;
    }
    .right {
      padding: 46px 0;
    }
    .right ul {
      gap: 30px;
    }
    .right p {
      font-size: 18px;
    }
  }

  .left, .right {
    border: none;

    @media screen and (min-width: 768px) {
      span {
        font-size: 16px;
      }
      p {
        font-size: 24px;
      }
    }
    @media screen and (min-width: 1024px) {
      span {
        font-size: 16px;
      }
      p {
        font-size: 24px;
      }
    }
  }
`;

const Heading = styled.h3`
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 1px;
  margin-bottom: 46px;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -38px;
    left: -36px;
    z-index: -1;
    width: 108px;
    height: 108px;
    border-radius: 50%;
    background-color: #FFCD85;
  }
  
  font-size: 24px;

   @media screen and (min-width: 768px) {
    font-size: 62px !important;
   }

   @media screen and (min-width: 1024px) {
      font-size: 84px;
    }
`;


export default MainContact;