import React, { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { tabsConfig } from "./tabsConfig";
import Tabs from "../../../../reusable-UI/Tabs";
export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); // ouvre moi le panel dans tous les cas
    setCurrentTabSelected(tabSelected); // réactualise l'onglet sélectionné
  };

  // if (tabSelected === "add") {
  //   setIsAddSelected(true);
  //   setIsEditSelected(false);
  // }

  // if (tabSelected === "edit") {
  //   setIsEditSelected(true);
  //   setIsAddSelected(false);
  // }
  const tabs = tabsConfig;

  // affichage
  return (
    <AdminTabsStyled>
      <Tabs
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tabs
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    border-bottom: 2px;
  }

  button {
    margin-left: 1px;
  }
`;
