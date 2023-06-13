import styled from "styled-components";
import { theme } from "../../../../theme/index.js";
import Menu from "./Menu.js";
import Admin from "./Admin/Admin.js";
import OrderContext from "../../../../context/OrderContext.js";
import { useContext } from "react";
export default function Main() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);
  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        {/* {isModeAdmin ? <Admin /> : null} */}
        {/* conditional rendering */}
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  border: 3px solid red;
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-columns: 1fr;

  // .basket {
  //   background: pink;
  //   border: 1px solid black;
  // }
  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
`;
