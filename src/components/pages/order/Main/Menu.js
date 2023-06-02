import { useState } from "react";
import styled from "styled-components";

export default function Menu() {
  const [products, setproducts] = useState([]);
  return <MenuStyled className="menu"></MenuStyled>;
}
const MenuStyled = styled.div`
  background: purple;
`;
