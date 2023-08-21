import styled, { useTheme } from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../theme/index.js";

export default function EditForm() {
  return (<EditFormStyled>
    <span>Cliquer sur un produit du menu pour le modifier</span>
    <HiCursorClick />
  </EditFormStyled>)

}
const EditFormStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};
  position: relative;
  top: 50px;
  span {
    margin-right: 10px;
  }
  
`;
