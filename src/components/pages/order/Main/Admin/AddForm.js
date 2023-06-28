import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext.js";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  //state

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const { handleAdd } = useContext(OrderContext);
  // comportements
  const handleClick = (e) => {
    e.preventDefault();
    const AddProcduct = {
      ...newProduct,
      id: crypto.randomUUID(), //generer un id unique de facon aleatoire
    };
    handleAdd(AddProcduct);
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
          <div>Aucune image</div>
          // <img src={newProduct.imageSource} alt="image" />
        )}
      </div>
      <div className="input-fields">
        <input
          value={newProduct.title}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="Nom"
          className="text"
        />
        <input
          value={newProduct.imageSource}
          name="imageSource"
          onChange={handleChange}
          type="text"
          placeholder="Image URL"
        />
        <input
          value={newProduct.price ? newProduct.price : ""}
          name="price"
          onChange={handleChange}
          type="text"
          placeholder="Prix"
        />
      </div>
      <button className="submit-button">Submit</button>
    </AddFormStyled>
  );
}
const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  // grid-template-columns: 1fr 3fr;
  // grid-template-rows: repeat(4, 1fr);
  grid-template: repeat(4, 1fr) / 1fr 3fr;
  height: 100%;
  width: 70%;

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
  }
  .input-fields {
    background: red;
    grid-area: 1/2 / 4/3;
    display: grid;
  }
  .submit-button {
    background: green;
    grid-area: 4/-2 / 5/-1;
    width: 50%;
  }
`;
