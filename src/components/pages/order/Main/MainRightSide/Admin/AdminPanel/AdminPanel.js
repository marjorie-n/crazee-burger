import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { getTabsConfig, getTabSelected } from "../Admin/tabsConfig.js";
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js";

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(OrderContext);
  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT;
  const tabs = getTabsConfig(hasAlreadyBeenClicked);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected.Content}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 240px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box;
  padding: 30px 5%;
`;
