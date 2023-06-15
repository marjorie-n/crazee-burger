import styled from "styled-components";
import Tabs from "../../../../reusable-UI/Tabs.js";
import {FiChevronDown} from "react-icons/fi";

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tabs 
      Icon={<FiChevronDown/>}
      
      />
    </AdminTabsStyled>
  );
}
const AdminTabsStyled = styled.div``;
