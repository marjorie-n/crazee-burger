import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext.js";
import TextInput from "../../../../../reusable-UI/TextInput.js";
import Button from "../../../../../reusable-UI/Button.js";
import ImagePreview from "./ImagePreview.js";
import SubmitMessage from "./SubmitMessage.js";
import { getInputTextsConfig } from "./getInputTextsConfig.js";

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

  const inputTexts = getInputTextsConfig(newProduct);
  return (
    <AddFormStyled onSubmit={handleClick}>
      <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title} />
      <div className="input-fields">
        {inputTexts.map((input) => <TextInput
          key={input.id}
          value={input.value}
          name={input.name}
          placeholder={input.placeholder}
          onChange={handleChange}
          Icon={input.Icon}
          version={input.version}
        />)}
      </div>
      <div className="submit">
        <Button className="submit-button" type="submit" label="Ajouter un nouveau produit au menu" version="success" />
        {isSubmitted && (
          <SubmitMessage />
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
`;
