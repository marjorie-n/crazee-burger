import React, { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./tabsConfig";
import Tabs from "../../../../reusable-UI/Tabs";
// import { TiTabsOutline } from "react-icons/ti";
export default function AdminTabs() {
  // state
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } =
    useContext(OrderContext)

  // comportements
  const selectTab = (tabSelected) => {
    setIsCollapsed(false) // tu m'ouvres le pannel
    setCurrentTabSelected(tabSelected)
  }

  const tabs = getTabsConfig()

  // affichage
  return (
    <AdminTabsStyled>
      <Tabs
        index="chevron"
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tabs
          key={tab.index}
          index={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;
  position: absolute;
  top: -43px;
  left: 5%;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`