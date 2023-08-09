import styled from "styled-components";
import { theme } from "../../theme/index";

export default function TextInput({ username, onChange, Icon,className, ...extraProps }) {
  // console.log("extraProps:", extraProps);
  return (
    <InputStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
      <input onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  // margin: 18px 0;
  .icon {
    color: ${theme.colors.greySemiDark};
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0 8px 0 10px;
  }
  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
      background-color: ${theme.colors.white};
    }
    
`;
