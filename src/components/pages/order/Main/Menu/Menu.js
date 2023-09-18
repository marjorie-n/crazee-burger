import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index.js";
import Card from "../../../../reusable-UI/Card.js";
import { formatPrice } from "../../../../../utils/maths.js";
import OrderContext from "../../../../../context/OrderContext.js";
import EmptyMenuAdmin from "./EmptyMenuAdmin.js";
import EmptyMenuClient from "./EmptyMenuClient.js";
import { checkIfProductIsClicked } from "./helper.js";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";
export default function Menu() {
  // State
  const { menu, isModeAdmin, handleDelete, resetMenu, productSelected, setproductSelected, setIsCollapsed, setCurrentTabSelected } = useContext(OrderContext);
  //comportements
  //affichage
  if (menu.length === 0) {
    const controlMenu = isModeAdmin ? <EmptyMenuAdmin onReset={resetMenu} /> : <EmptyMenuClient />;
    return controlMenu;
    // if(!isModeAdmin) return <EmptyMenuClient/>
    // return < EmptyMenuAdmin onReset={resetMenu} />
  }
  const handleClick = (idproductClickedOn) => {
    if(!isModeAdmin) return; //si on est en mode client, sors de la fonction. 
    setIsCollapsed(false);//ouvre le menu panel
    setCurrentTabSelected("edit"); //affiche le formulaire d'édition
    // Dans le menu, trouve le produit dont id est égal à id produit 
    const productClickedOn = menu.find((product) => product.id === idproductClickedOn);
    // console.log("productSelected:", productSelected);
    setproductSelected(productClickedOn);
  };
  const handleCardDelete = (e, idProductToDelete) => { 
    e.stopPropagation();
    handleDelete(idProductToDelete);
  }
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
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
