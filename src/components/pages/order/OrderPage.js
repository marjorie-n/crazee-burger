import styled from "styled-components";
import Navbar from "./Navbar/Navbar.js";
import { theme } from "../../../theme/index.js";
import Main from "./Main/Main.js";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.js";
import { useParams } from "react-router-dom";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product.js";
import { deepClone } from "../../../utils/array.js";


export default function OrderPage() {
  // State
  const { username } = useParams();
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [isAddSelected, setIsAddSelected] = useState(true);
  // const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setproductSelected] = useState(EMPTY_PRODUCT);

  // comportements
  const handleAdd = (newProduct) => {
    // 1. copie du tableau
    const menuCopy = deepClone(menu);
    // 2. manip du tableau
    const menuUpdated = [...menuCopy, newProduct];
    // 3. mise à jour du state
    console.log(menuUpdated);
    setMenu(menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    // alert(idOfProductToDelete);
    //copie du state
    const menuCopy = deepClone(menu);
    // manip du state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );

    // mise à jour du state
    setMenu(menuUpdated);
  };

  const handleEdit = (productToEdit) => {
    //@TODO: find a clearer implementation
    console.log("productToEdit:", productToEdit);
    // 1. copie du state
    const menuCopy = deepClone(menu);
    // 2. manip du state
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productToEdit.id)
    console.log("indexOfProductToEdit:", indexOfProductToEdit);
    menuCopy[indexOfProductToEdit] = productToEdit;
    // 3. mise à jour du state
    setMenu(menuCopy);
  }

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
    productSelected,
    setproductSelected,
    handleEdit,
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
