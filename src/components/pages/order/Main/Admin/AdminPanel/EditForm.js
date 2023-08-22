import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../theme/index.js";
import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.js";

export default function EditForm() {
  const { productSelected } = useContext(OrderContext);
  return (
    <EditFormStyled>
      <span style={{ fontWeight: "bold", color: theme.colors.primary }}>{productSelected && productSelected.title}</span>
      <span>Cliquer sur un produit du menu pour le modifier</span>
      <HiCursorClick />
    </EditFormStyled>
  )
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
