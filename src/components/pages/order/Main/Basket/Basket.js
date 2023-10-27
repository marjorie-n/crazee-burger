import styled from "styled-components"
import {theme} from "../../../../../theme"

export default function Basket() {
  return (
    <BasketStyled>
      <div className="head">head</div>
      <div className="body">body</div>
      <div className="foot">foot</div>
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
  }
  .foot {
    height: 70px;
    background: ${theme.colors.background_dark};
  }
  
`
