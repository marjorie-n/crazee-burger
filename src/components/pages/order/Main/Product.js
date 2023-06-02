import styled from "styled-components";

export default function Product({ imageSource, title, price }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="description">
          <div className="title">{title}</div>
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
  width: 240px;
  height: 330px;

  .image {
    border: 1px solid black;
    width: 100px;
    height: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .description {
    border: 1px solid black;
  }
`;
