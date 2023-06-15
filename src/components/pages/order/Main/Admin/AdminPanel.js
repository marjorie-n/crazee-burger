import styled from "styled-components";
import { theme } from "../../../../../theme/index.js";

export default function AdminPanel() {
  return <AdminPanelStyled>AdminPanel</AdminPanelStyled>;
}
const AdminPanelStyled = styled.div`
height: 250px;
background: ${theme.colors.background_white}};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
