import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide.js";
import NavbarLeftSide from "./NavbarLeftSide.js";
import Logo from "../../reusable-UI/Logo.js";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarLeftSide />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}
const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 0 20px;  

`;
