import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import Card from "../../../../../reusable-UI/Card";
import { formatPrice } from "../../../../../../utils/maths";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../../../enums/product";


export default function Menu() {
  // State
  const { menu, isModeAdmin, handleDelete, resetMenu, productSelected, setproductSelected, setIsCollapsed, setCurrentTabSelected, titleEditfRef } = useContext(OrderContext);
  //comportements
  //affichage
  if (menu.length === 0) {
    const controlMenu = isModeAdmin ? <EmptyMenuAdmin onReset={resetMenu} /> : <EmptyMenuClient />;
    return controlMenu;
    // if(!isModeAdmin) return <EmptyMenuClient/>
    // return < EmptyMenuAdmin onReset={resetMenu} />
  }
  const handleClick = async (idproductClickedOn) => {
    if (!isModeAdmin) return; //si on est en mode client, sors de la fonction. 
    await setIsCollapsed(false);//ouvre le menu panel
    await setCurrentTabSelected("edit"); //affiche le formulaire d'édition
    // Dans le menu, trouve le produit dont id est égal à id produit 
    const productClickedOn = menu.find((product) => product.id === idproductClickedOn);
    await setproductSelected(productClickedOn);
    titleEditfRef.current.focus();
  };
  const handleCardDelete = (e, idProductToDelete) => {
    e.stopPropagation();
    handleDelete(idProductToDelete);
    idProductToDelete === productSelected.id && setproductSelected(EMPTY_PRODUCT);
  }
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            leftDescription={formatPrice(price)}
            hasDeletbutton={isModeAdmin}
            onDelete={(e) => handleCardDelete(e, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            // isSelected = {id === productSelected.id}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
