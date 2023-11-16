import React from 'react'
import styled from 'styled-components';
import BasketCard from './BasketCard.js';

export default function BasketProducts({ basket }) {
  return (
    <BasketProductsStyled>{basket.map(product =>
      <div className='basket-card'>
        <BasketCard {...product} />
      </div>
    )}</BasketProductsStyled>
  )
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
  
`;
