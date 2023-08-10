import styled, { css } from "styled-components";
import { theme } from "../../theme/index";

export default function TextInput({ username, onChange, Icon, className, version = "normal", ...extraProps }) {
  // console.log("extraProps:", extraProps);
  return (
    <InputStyled className={className} version={version}>
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
  }
  ${({ version }) => version === "normal" && extraStyleNormal};
  ${({ version }) => version === "minimalist" && extraStyleMinimalist};
  `

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};
  input {
    color: ${theme.colors.dark};
    &::placeholder {
      color: ${theme.colors.white};
    }
  }
  `
const extraStyleMinimalist = css`
background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};
  input {
    color: ${theme.colors.dark};
    background-color: ${theme.colors.background_white};

    &:focus {
      outline: 0;
    }
  }
  `;
