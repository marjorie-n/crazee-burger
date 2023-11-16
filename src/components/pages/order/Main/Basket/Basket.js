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
  const { basket } = useContext(OrderContext)
  const isBasketEmpty = basket.length === 0;
  return (
    <BasketStyled>
      <Total amountTopay={formatPrice(0)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} />}
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

