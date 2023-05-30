import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide.js";
import NavbarLeftSide from "./NavbarLeftSide.js";
import Logo from "../../reusable-UI/Logo.js";
import { theme } from "../../../theme/index.js";
import { refreshPage } from "../../../utils/Window.js";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={refreshPage} />
      <NavbarLeftSide />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  background-color: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

  background-color: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  .logo-order-page {
    cursor: pointer;
  }

  .logo-order-page {
    cursor: pointer;
  }
`;
