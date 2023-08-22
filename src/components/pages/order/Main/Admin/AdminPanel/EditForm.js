// import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../theme/index.js";
import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.js";
import ImagePreview from "./ImagePreview.js";
import TextInput from "../../../../../reusable-UI/TextInput.js";
import { getInputTextsConfig } from "./getInputTextsConfig.js";
import { useState } from "react";
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js";

export default function EditForm() {
  const { productSelected } = useContext(OrderContext);
  const [editProduct, seteditProduct] = useState(EMPTY_PRODUCT);//state interne du composant

  const handleChange = (e) => {
    const { value, name } = e.target;
    seteditProduct({
      ...editProduct,
      [name]: value,
    })
  }

  const inputTexts = getInputTextsConfig(productSelected);
  return (
    <EditFormStyled>
      <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title} />
      <div className="input-fields">
        {inputTexts.map((input) =>
          <TextInput
            {...input}
            key={input.id}
            name={input.name}
            onChange={handleChange}
            version={input.version}
          />)}
      </div>
      <div className="submit">
      </div>
    </EditFormStyled>
  )
}
const EditFormStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};
  position: relative;
  top: 50px;
  span {
    margin-right: 10px;
  }
  
`;
