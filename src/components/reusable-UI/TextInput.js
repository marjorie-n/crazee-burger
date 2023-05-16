import styled from "styled-components";

export default function TextInput({ username, onChange, Icon, ...extraProps }) {
  // console.log("extraProps:", extraProps);
  return (
    <InputStyled>
      {Icon && Icon}
      <input onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: gray;
    }
    input {
      border: none;
      font-size: 15px;
      color: black;
      width: 100%;
    }

    &::placeholder {
      color: lightgray;
      background-color: white;
    }
`;
