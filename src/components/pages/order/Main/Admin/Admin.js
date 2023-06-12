import styled from "styled-components";
import { theme } from "../../../../../theme/index.js";

export default function Admin() {
  return <AdminStyled className="admin">Admin</AdminStyled>;
}
const AdminStyled = styled.div`
  height: 250px;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  background: ${theme.colors.background_white}};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
