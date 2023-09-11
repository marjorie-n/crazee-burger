import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index.js";
import Card from "../../../../reusable-UI/Card.js";
import { formatPrice } from "../../../../../utils/maths.js";
import OrderContext from "../../../../../context/OrderContext.js";
import EmptyMenuAdmin from "./EmptyMenuAdmin.js";
import EmptyMenuClient from "./EmptyMenuClient.js";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";
export default function Menu() {
  // State
  const { menu, isModeAdmin, handleDelete, resetMenu, setproductSelected, } = useContext(OrderContext);
  //comportements
  //affichage
  if (menu.length === 0) {
    const controlMenu = isModeAdmin ? <EmptyMenuAdmin onReset={resetMenu} /> : <EmptyMenuClient />;
    return controlMenu;
    // if(!isModeAdmin) return <EmptyMenuClient/>
    // return < EmptyMenuAdmin onReset={resetMenu} />
  }
  const handleClick = (idproductClickedOn) => {
    // console.log("idproductSelected:", idproductSelected);
    // Dans le menu, trouve le produit dont id est égal à id produit sélectionné
    const productClickedOn = menu.find((product) => product.id === idproductClickedOn);
    // console.log("productSelected:", productSelected);
    setproductSelected(productClickedOn);
  };
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
            onDelete={() => handleDelete(id)}
            onClick={() => handleClick(id)}
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
