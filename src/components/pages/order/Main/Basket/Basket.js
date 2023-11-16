import styled from "styled-components"
import Total from "./Total.js"
import { formatPrice } from "../../../../../utils/maths.js"
import Footer from "./Footer.js"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.js"
import EmptyBasket from "./EmptyBasket.js"
import BasketProducts from "./BasketProducts.js"

export default function Basket() {
  const { basket } = useContext(OrderContext)
  const isBasketEmpty = basket.length === 0;
  return (
    <BasketStyled>
      <Total amountTopay={formatPrice(0)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;

  
`
