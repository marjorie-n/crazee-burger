import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme/index.js';

export default function EmptyBasket() {
    return (
        <EmptyBasketStyled>
            <div className="empty-message">
                Votre panier est vide
            </div>
        </EmptyBasketStyled>
    )
}
const EmptyBasketStyled = styled.div`
flex: 1;
background: ${theme.colors.background_white};
box-shadow: ${theme.shadows.basket};
.empty-message{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(95vh - 10vh - 70px - 70px);
    align-self: center;
    line-height: 2;
    font-size: ${theme.fonts.size.P4};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};
}
  
`;
