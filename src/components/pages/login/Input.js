import styled from "styled-components";

export default function Input({ value,username, onChange, Icon, ...extraProps }) {
  console.log("extraProps:", extraProps);
  return (
    <InputStyled>
      {/* <BsPersonCircle className="icon" /> */}
      {Icon && Icon}
      <input
        type="text"
        value={value}
        
        // placeholder={placeholder}
        // required={required ? true : false}
        {...extraProps}
        username={username}
        onChange={onChange}
      />
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
    }

    &::placeholder {
      color: lightgray;
      background-color: white;
    }
`;
