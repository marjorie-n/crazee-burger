import React from "react"
import styled from "styled-components"
import TextInput from "../../../../../reusable-UI/TextInput"
import ImagePreview from "./ImagePreview"
import { getInputTextsConfig } from "./getInputTextsConfig"
const AdminForm = React.forwardRef(({ product, onSubmit, onChange, children }, ref) => {
  // state (vide)

  // comportements (vide)

  const inputTexts = getInputTextsConfig(product)

  // affichage
  return (
    <AdminFormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={onChange}
            version="minimalist"
            ref={ref && input.name === "title" ? ref : null}
          />
        ))}
      </div>
      <div className="submit">{children}</div>
    </AdminFormStyled>
  )
})

export default AdminForm;

const AdminFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }
  .submit {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`