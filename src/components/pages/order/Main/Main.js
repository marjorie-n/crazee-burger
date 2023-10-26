import styled from "styled-components";
import { theme } from "../../../../theme/index.js";
import MainRightSide from "./MainRightSide/MainRightSide.js";
import Basket from "./Basket/Basket";
export default function Main() {
  return (
    <MainStyled>
        <Basket/>
        <MainRightSide />
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
  grid-template-columns: 25% 1fr;
  overflow: hidden;
  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
`;
