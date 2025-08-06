import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import MainFooter from '../components/Home/MainFooter';
import { newsItems } from '../data/sectionItems';

function News() {
  const { imgSrc, items } = useLoaderData();

  return (
    <>
      <Container>
        <Inner>
          <BannerImg>
            {imgSrc && <img src={imgSrc[0]} alt="news-banner" />}
          </BannerImg>
          <GridList>
            {newsItems?.items.map((item) => (
              <GridItem key={item.id} to={item.link} target="_blank" rel="noopener noreferrer">
                <div className="grid-box">
                  <div className="thumbnail">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className="body">
                    <span className="date">{item.date}</span>
                    <span className="title">{item.title}</span>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              </GridItem>
            ))}
          </GridList>
        </Inner>
      </Container>
      <MainFooter />
    </>
  );
}

const Container = styled.section`
  width: 100%;
  min-height: 140vh;
  padding-bottom: 260px;
  margin-top: 140px;
`;

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
`

const BannerImg = styled.div`
  width: 100%;
  background-color: blue;
  margin-bottom: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GridList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled(NavLink)`

  padding: 6px;

  .grid-box {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    padding: 14px 10px 40px 10px;
  }

  .thumbnail {
    margin-bottom: 24px;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  .body {
    display: flex;
    flex-direction: column;

    span.title {
      font-size: 18px;
      line-height: 1.4;
      font-weight: 600;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 16px;
    }

    span.date {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 8px;
    }

    p.description {
      font-size: 16px;
      color: #5e5e5e;
      font-weight: 300;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  @media (min-width: 768px) {
    max-width: 50%;
    flex: 0 0 50%;
  }
  @media (min-width: 992px) {
    max-width: 33.3333%;
    flex: 0 0 33.3333%;
  }
  @media (min-width: 1190px) {
    max-width: 25%;
    flex: 0 0 25%;
  }
`;

export default News;
