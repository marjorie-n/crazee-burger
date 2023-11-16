import styled from "styled-components"
import Total from "./Total.js"
import { formatPrice } from "../../../../../utils/maths.js"
import Footer from "./Footer.js"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.js"
import EmptyBasket from "./EmptyBasket.js"

export default function Basket() {
  const { basket } = useContext(OrderContext)
  return (
    <BasketStyled>
      <Total amountTopay={formatPrice(0)} />
      <EmptyBasket basket={basket} />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;

  
`
