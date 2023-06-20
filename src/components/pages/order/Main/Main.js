import styled from "styled-components";
import { theme } from "../../../../theme/index.js";
import Menu from "./Menu.js";
import Admin from "./Admin/Admin.js";
import OrderContext from "../../../../context/OrderContext.js";
import { useContext } from "react";
export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);
  return (
    <MainStyled className="main">
      <div className="menu-and-admin">
        <Menu />
        {/* conditional rendering */}
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-columns: 1fr;
  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
`;
