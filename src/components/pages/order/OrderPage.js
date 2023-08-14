import styled from "styled-components";
import Navbar from "./Navbar/Navbar.js";
import { theme } from "../../../theme/index.js";
import Main from "./Main/Main.js";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.js";
import { useParams } from "react-router-dom";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "./Main/Admin/AddForm.js";

export default function OrderPage() {
  // State
  const { username } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [isAddSelected, setIsAddSelected] = useState(true);
  // const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.SMALL);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);


  // comportements
  const handleAdd = (newProduct) => {
    const menuCopy = [...menu];
    const menuUpdated = [newProduct, ...menuCopy];
    console.log(menuUpdated);
    setMenu(menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    // alert(idOfProductToDelete);
    //copie du state
    const menuCopy = [...menu];
    // manip du state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );

    // mise à jour du state
    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  }

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
