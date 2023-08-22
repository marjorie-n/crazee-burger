import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => { },
  isCollapsed: false,
  setIsCollapsed: () => { },
  isAddSelected: false,
  currentTabSelected: false,
  setCurrentTabSelected: () => { },
  menu: [],
  handleAdd: () => { },
  handleDelete: () => { },
  resetMenu: () => { },
  newProduct: {},
  setNewProduct: () => { },
  productSelected: {},
  setproductSelected: () => { },
});
