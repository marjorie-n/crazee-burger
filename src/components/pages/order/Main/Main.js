import styled from "styled-components";
import { theme } from "../../../../theme/index.js";
import Menu from "./Menu.js";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <Menu />
    </MainStyled>
  );
}
const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;  
  overflow-y: scroll;
  // add 25% to the grid-template-columns for basket
  grid-template-columns: 1fr;
  // .basket {
  //   background: pink;
  // }
  
`;
