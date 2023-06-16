import styled from "styled-components";
import Tabs from "../../../../reusable-UI/Tabs.js";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme/index.js";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  const chevronIcon = isCollapsed ? <FiChevronUp /> : <FiChevronDown />;

  return (
    <AdminTabsStyled>
      <Tabs
        Icon={chevronIcon}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
    </AdminTabsStyled>
  );
}
const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`;
