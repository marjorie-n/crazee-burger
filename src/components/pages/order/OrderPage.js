import styled from "styled-components";
import Navbar from "./Navbar/Navbar.js";
import { theme } from "../../../theme/index.js";
import Main from "./Main/Main.js";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext.js";
import { useParams } from "react-router-dom";
import { EMPTY_PRODUCT } from "../../../enums/product.js";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket.js";

export default function OrderPage() {
  // State
  const { username } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setproductSelected] = useState(EMPTY_PRODUCT);
  const titleEditfRef = useRef();
  const { menu, resetMenu, handleAdd, handleDelete, handleEdit } = useMenu();
  const {basket} = useBasket();
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    resetMenu,
    handleAdd,
    handleDelete,
    newProduct,
    setNewProduct,
    productSelected,
    setproductSelected,
    handleEdit,
    titleEditfRef,
    basket

  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
