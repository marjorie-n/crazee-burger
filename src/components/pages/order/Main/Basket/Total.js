import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Header from '../../../../reusable-UI/Header.js';

export default function Total({ amountTopay }) {
    return (
        <Header>
        <TotalStyled>
            <span className="total">Total</span>
            <span className="amount">{amountTopay}</span>
        </TotalStyled>
        </Header>
    )
}
const TotalStyled = styled.div`
display: flex;
align-items: center;
letter-spacing: 2px;
justify-content: space-between;
font-family: "Amatic SC", cursive;
font-size: ${theme.fonts.size.P4};
font-weight: ${theme.fonts.weights.bold};
color: ${theme.colors.primary};
`;
