// import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../theme/index.js";
import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.js";
import ImagePreview from "./ImagePreview.js";
import TextInput from "../../../../../reusable-UI/TextInput.js";
import { getInputTextsConfig } from "./getInputTextsConfig.js";
export default function EditForm() {
  //state
  const {
    productSelected,
    setproductSelected,
    handleEdit,
    titleEditfRef
  } = useContext(OrderContext);

  const inputTexts = getInputTextsConfig(productSelected);
  // comportements (gestionnaire d'évènement)
  const handleChange = (e) => {
    const { value, name } = e.target;
    const productToBeingUpdated = {
      ...productSelected,
      [name]: value,
    };
    setproductSelected(productToBeingUpdated);// update to form
    handleEdit(productToBeingUpdated);//updtate menu
  }
  //affichage 

  return (
    <EditFormStyled>
      <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            // name={input.name}
            onChange={handleChange}
            version="minimalist"
            ref={input.name === "title" ? titleEditfRef : null}
          />
        ))}
      </div>
      <div className="submit">
        <span className="sentence">
          Cliquer sur un produit du menu pour le modifier{""}
        </span>
        <span className="live-update">
          en temps réel
        </span>
      </div>
    </EditFormStyled>
  )
}
const EditFormStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  position: relative;
  top: 50px;
  span {
    margin-right: 10px;
  }
  .input-fields {
    gris-area:1/ 2/ -2/ 3;
    display: grid;
    grid-row-gap: 8px;
  }
  .submit {
    gris-area:4/ -2/ -1/ -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
  .sentence {
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.M};
    .live-update {
      text-decoration: underline;    
    }
  }
  }
  
`;
