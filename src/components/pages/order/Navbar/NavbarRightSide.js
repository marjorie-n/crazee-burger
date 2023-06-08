import styled from "styled-components";
import Profile from "./profile.js";
import ToggleButton from "../../../reusable-UI/ToggleButton.js";

export default function NavbarRightSide({ username}) {
  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        colorBackground={"#2d3436"}
        colorText={"#ffeaa7"}

      />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}
const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
