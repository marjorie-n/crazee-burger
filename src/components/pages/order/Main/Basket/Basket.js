import styled from "styled-components"
import Total from "./Total.js"
import { formatPrice } from "../../../../../utils/maths.js"
import Footer from "./Footer.js"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.js"
import EmptyBasket from "./EmptyBasket.js"
import BasketProducts from "./BasketProducts.js"
import { theme } from "../../../../../theme"


export default function Basket() {
  const { basket, isModeAdmin } = useContext(OrderContext) // Get the basket from the OrderContext
  const isBasketEmpty = basket.length === 0; // Check if the basket is empty
  const sumToPay = basket.reduce((acc, product) => { 
    // Calculate the total amount to pay if the basket is not empty and the product price is not 0 and NaN
    if (!isNaN(product.price) && product.price !== 0)
      return acc += product.price * product.quantity
    return acc
  }, 0)
  return (
    <BasketStyled> 
      <Total amountTopay={formatPrice(sumToPay)} /> 
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} isModeAdmin={isModeAdmin}/>} 
      <Footer /> 
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.round};
  height: 85vh;
  .head {
    position: sticky;
    top: 0;
  }
  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`

