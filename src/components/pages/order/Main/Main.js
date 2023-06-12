import styled from "styled-components";
import { theme } from "../../../../theme/index.js";
import Menu from "./Menu.js";

export default function Main() {
  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
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

      .admin {
        background: red;
        height: 250px;
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
    
  }
`;
