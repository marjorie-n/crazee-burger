import styled from "styled-components";
import { theme } from "../../theme/index";

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
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;
  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: ${theme.gridUnit}px;
    color: ${theme.colors.greySemiDark};
  }
  input {
    border: none;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
      background-color: ${theme.colors.white};
    }
  }
`;
