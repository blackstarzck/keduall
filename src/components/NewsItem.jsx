import React from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components';

const NewsItem = ({ imgSrc, category, title, date, link }) => {
  return (
    <NewsItemContainer className="" to={link}>
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
  .tumbnail {
    margin-bottom: 14px;
    
    img {
      width: 100%;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
  }

  .category {
    color: var(--primary);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 14px;
  }

  .title {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .date {
    font-size: 16px;
    color: #5e5e5e;
  }
`;

export default NewsItem;