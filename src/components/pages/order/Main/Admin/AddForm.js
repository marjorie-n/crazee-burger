import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext.js";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);
  const newProduct = {
    id: new Date().getTime(),
    imageSource: "/images/burger1.png",
    title: "Burger 1",
    price: 5.297,
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("handleAdd");
    handleAdd(newProduct);
  };
  return (
    <AddFormStyled onSubmit={handleClick}>
      <div className="image-preview">Image</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" className="text" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Prix" />
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
