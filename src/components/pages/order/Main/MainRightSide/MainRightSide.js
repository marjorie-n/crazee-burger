import { useContext } from "react"
<<<<<<< HEAD
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../theme"
import Admin from "./Admin/Admin"
import Menu from "./Menu/Menu"
=======
import OrderContext from "../../../../../context/OrderContext.js"
import Menu from "../Menu/Menu.js"
import Admin from "./Admin/Admin.js"
import styled from "styled-components"
import { theme } from "../../../../../theme/index.js"
>>>>>>> 849b697a96b2b000868459b6157ab2fd20fedd83

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