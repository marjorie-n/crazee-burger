import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.js"
import Menu from "../Menu/Menu.js"
import Admin from "./Admin/Admin.js"
import styled from "styled-components"
import { theme } from "../../../../../theme/index.js"

export default function MainRightSide() {
    const { isModeAdmin } = useContext(OrderContext)
  
    return (
      <MainRightSideStyled>
        <Menu />
        {isModeAdmin && <Admin />}
      </MainRightSideStyled>
    )
  }
  
  const MainRightSideStyled = styled.div`
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  `