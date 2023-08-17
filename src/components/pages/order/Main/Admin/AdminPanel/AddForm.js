import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext.js";
import { FiCheck } from "react-icons/fi";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../../theme/index.js";
import TextInput from "../../../../../reusable-UI/TextInput.js";
import Button from "../../../../../reusable-UI/Button.js";
import ImagePreview from "./ImagePreview.js";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  //state

  // const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  // comportements
  const handleClick = (e) => {
    e.preventDefault();
    const AddProcduct = {
      ...newProduct,
      id: crypto.randomUUID(), //generer un id unique de facon aleatoire
    };
    handleAdd(AddProcduct);
    setNewProduct(EMPTY_PRODUCT); //vider le state apres l'ajout du produit
    displayMessage();
  };

  const displayMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    // const newValue = e.target.value;
    // const name = e.target.name;
    const { value, name } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  return (
    <AddFormStyled onSubmit={handleClick}>
      <ImagePreview imageSource={newProduct} title={newProduct.title} />
      <div className="input-fields">
        <TextInput
          value={newProduct.title}
          name="title"
          type="text"
          placeholder="Nom du produit (ex.Super Burger)"
          onChange={handleChange}
          version="minimalist"
          Icon={<FaHamburger />}
        />
        <TextInput
          value={newProduct.imageSource}
          name="imageSource"
          type="text"
          placeholder="Lien URL d'une image"
          onChange={handleChange}
          version="minimalist"
          Icon={<BsFillCameraFill />}
        />
        <TextInput
          value={newProduct.price ? newProduct.price : ""}
          name="price"
          type="text"
          placeholder="Prix"
          onChange={handleChange}
          version="minimalist"
          Icon={<MdOutlineEuro />}
        />
      </div>
      <div className="submit">
        <Button className="submit-button" type="submit" label="Ajouter un nouveau produit au menu" version="success" />
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck className="icon" />
            <span className="message">Ajouté avec succés</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}
const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template: repeat(4, 1fr) / 1fr 3fr;
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    // background: red;
    grid-area: 1/2 / 4/3;
    display: grid;
    grid-row-gap: 8px;
  }
  .submit{
    // background: green;
    grid-area: 4/-2 / 5/-1;
    display: flex;
    align-items: center;
    position: relative;
    .submit-button {
      width: 50%;
    }
    .submit-message {
      // border: 2px solid pink;

      .icon {
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        border: 1px solid ${theme.colors.success};
        vertical-align: middle;
      }
      .message {
        color: ${theme.colors.success};
        margin-left: 5px;
        font-size: ${theme.fonts.size.SM};
      }
    }
  }
`;
