import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext.js";

export default function AddForm() {
  //state
  const [title, setTitle] = useState("");
  const [sourceImage, setSourceImage] = useState("");
  const [price, setPrice] = useState(0);

  const { handleAdd } = useContext(OrderContext);
  // comportements
  const handleClick = (e) => {
    e.preventDefault();
    const AddProcduct = {
      id: new Date().getTime(),
      title: title,
      sourceImage: sourceImage,
      price: price,
    };
    handleAdd(AddProcduct);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleImage = (e) => {
    setSourceImage(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <AddFormStyled onSubmit={handleClick}>
      <div className="image-preview">Aucune image</div>
      <div className="input-fields">
        <input
          value={title}
          onChange={handleTitle}
          type="text"
          placeholder="Nom"
          className="text"
        />
        <input
          value={sourceImage}
          onChange={handleImage}
          type="text"
          placeholder="Image URL"
        />
        <input
          value={price ? price : ""}
          onChange={handlePrice}
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
    background: blue;
    grid-area: 1/1 / 4/2;
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
