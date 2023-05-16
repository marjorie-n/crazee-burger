import styled from "styled-components";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled className="button-with-icon">
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}
const PrimaryButtonStyled = styled.button`
  .button-with-icon {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    background-color: orange;
    color: white;
    font-size: 15px;
    font-weight: 800;
    border: 1px solid orange;
    cursor: pointer;

    &:hover:not(:disabled) {
      background-color: white;
      color: orange;
      border: 1px solid orange;
      .icon {
        color: orange;
      }
    }

    &:active {
      background-color: orange;
      color: white;
      border: 1px solid orange;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
