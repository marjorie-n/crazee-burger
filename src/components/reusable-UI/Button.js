import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({ label, Icon, className, version = "default", onClick }) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
//variant de style du composant
${({ version }) => extraButtonStyle[version]};
`;
const extraButtonStyleNormal = css`
width: 100%;
border: 1px solid red;
display: inline-flex;
justify-content: center;
align-items: center;
position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
white-space: nowrap; //prevents the text label from wrapping to the next line.
text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
line-height: 1;
padding: 18px 24px;
border-radius: 5px;
font-size: 15px;
font-weight: 800;
color: white;
background-color: #ff9f1b;
border: 1px solid #ff9f1b;

:hover {
  color: ${theme.colors.primary};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};
  transition: all 200ms ease-out;
}
:active {
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
}

&.is-disabled {
  opacity: 50%;
  cursor: not-allowed;
  z-index: 2;
}

&.with-focus {
  border: 1px solid white;
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  :hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.white};
  }
  :active {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.greySemiDark};
  }
}
`;
const extraButtonStyleSuccess = css`
  cursor:pointer;
  color : ${theme.colors.white};
  background-color: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};
  :hover {
    color: ${theme.colors.success};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
  }
  :active {
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
  }
`;
// Dictionnaire pour le style du composant
const extraButtonStyle = {
  default: extraButtonStyleNormal,
  success: extraButtonStyleSuccess,
};
