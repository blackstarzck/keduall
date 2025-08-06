import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NewsItem = ({ side, imgSrc, category, title, date, link }) => {
  return (
    <NewsItemContainer $side={side} className="" to={link} target="_blank" rel="noopener noreferrer">
      <div className="tumbnail">
        <img src={ imgSrc } alt={ category } />
      </div>
      <div className="description">
        <span className="category">{ category }</span>
        <span className="title">{ title }</span>
        <p className="date">{ date }</p>
      </div>
    </NewsItemContainer>
  );
};

const NewsItemContainer = styled(NavLink)`
  display: block;

  .tumbnail {
    margin-bottom: 26px;
    height: ${({ $side }) => $side === 'right' ? '300px' : '500px'};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
  }

  .category {
    color: var(--primary);
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 14px;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .date {
    font-size: 12px;
    color: #5e5e5e;
  }

  @media screen and (min-width: 768px) {
    .categor {
      font-size: 14px;
    }
    .title {
      font-size: 24px;
    }
    .date {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1024px) {
    .categor {
      font-size: 16px;
    }
    .title {
      font-size: 30px;
    }
    .date {
      font-size: 16px;
    }
  }
`;

export default NewsItem;
