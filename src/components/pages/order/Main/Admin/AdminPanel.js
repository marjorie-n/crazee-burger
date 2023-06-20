import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { getTabsConfig, getTabSelected } from "./getTabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);
  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled className="panel-admin">
      {currentTabSelected === tabSelected.index && tabSelected.label}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 251px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
`;
