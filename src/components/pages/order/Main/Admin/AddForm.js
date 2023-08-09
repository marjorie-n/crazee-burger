import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext.js";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../theme/index.js";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  //state

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { handleAdd } = useContext(OrderContext);
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
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div className="empty-image">Aucune image</div>
          // <img src={newProduct.imageSource} alt="image" />
        )}
      </div>
      <div className="input-fields">
        <input
          value={newProduct.title}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Nom du produit (ex.Super Burger)"
          className="text"
        />
        <input
          value={newProduct.imageSource}
          name="imageSource"
          onChange={handleChange}
          type="text"
          placeholder="Lien URL d'une image"
        />
        <input
          value={newProduct.price ? newProduct.price : ""}
          name="price"
          onChange={handleChange}
          type="text"
          placeholder="Prix"
        />
      </div>
      <div className="submit">
        <button className="submit-button">Submit</button>
        {isSubmitted && (
          <div className="submit-message">
            <FiCheck />
            <span>Ajouté avec succés</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}
const AddFormStyled = styled.form `
  display: grid;
  // grid-template-columns: 1fr 3fr;
  // grid-template-rows: repeat(4, 1fr);
  grid-template: repeat(4, 1fr) / 1fr 3fr;
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .image-preview {
    grid-area: 1/1 / 4/2;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
    .empty-image{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border:1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
  }
  .input-fields {
    background: red;
    grid-area: 1/2 / 4/3;
    display: grid;
  }
  .submit{
    background: green;
    grid-area: 4/-2 / 5/-1;
    display: flex;
    align-items: center;
    .submit-button {
      width: 50%;
    }
    .submit-message {
      border: 2px solid pink;
    }
  }
`;
