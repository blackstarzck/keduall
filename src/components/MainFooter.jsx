import { NavLink } from "react-router";
import styled from "styled-components";

const MainFooter = () => {
  return (
    <MainFooterContainer>
      <div className="logo">
        <img src="/images/keduall_dark.png" alt="로고" />
      </div>
      <div className="info">
        <div>
          <p>경기 김포시 태장로 755 ㅣ 사업자 등록번호 : 107-82-18122 ㅣ 대표이사 서지석</p>
          <p>COPYRIGHTⓒ 2025. KEDUALL. ALL RIGHT RESERVED</p>
        </div>
      </div>
    </MainFooterContainer>
  )
}

const MainFooterContainer = styled.div`
  padding: 0 80px 44px;

  .logo {
    width: 140px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    p:first-child {
      font-size: 14px;
      color: #5e5e5e;
      font-weight: 400;
      line-height: 1.4;
    }
    p:last-child {
      font-size: 14px;
      line-height: 1.4;
    }

    & > div {
      padding-left: 12px;
    }
  }
  
  .facebook, .tiktok {
    display: block;
    width: 46px;
    height: 46px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`

export default MainFooter;
