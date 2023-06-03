import styled from "styled-components";

export default function Product({ imageSource, title, price }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
      <div className="title">{title}</div>
        <div className="description"></div>
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}
const ProductStyled = styled.div`
  border: 1px solid black;
  background: red;
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;

  .image {
    border: 1px solid black;
    width: 100%;
    height: auto;
    margin-top: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .description {
    border: 1px solid black;
  }
`;
