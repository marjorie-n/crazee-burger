import styled from "styled-components"
import Total from "./Total.js"
import { formatPrice } from "../../../../../utils/maths.js"
import Footer from "./Footer.js"
import BasketBody from "./BasketBody.js"

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountTopay={formatPrice(0)} />
      <BasketBody/>
     <Footer/>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;

  
`
