import styled from "styled-components"
import { theme } from "../../../../../theme"
import Total from "./Total.js"
import { formatPrice } from "../../../../../utils/maths.js"
import Footer from "./Footer.js"

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountTopay={formatPrice(0)} />
      <div className="body">body</div>
     <Footer/>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  .head{
    height: 70px;
    background: ${theme.colors.background_dark};
  }
  .body{
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
  .foot {
    height: 70px;
    background: ${theme.colors.background_dark};
  }
  
`
