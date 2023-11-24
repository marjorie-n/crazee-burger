import React from 'react'
import styled from 'styled-components';
import BasketCard from './BasketCard.js';
import { IMAGE_COMING_SOON } from '../../../../../enums/product.js';

export default function BasketProducts({ basket, isModeAdmin }) {
  return (
    <BasketProductsStyled>{basket.map(product =>
      <div className='basket-card' key={product.id}>
        <BasketCard {...product} imageSource={product.imageSource ? product.imageSource : IMAGE_COMING_SOON}
          isModeAdmin={isModeAdmin} />
      </div>
    )}</BasketProductsStyled>
  )
}

const BasketProductsStyled = styled.div`
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
