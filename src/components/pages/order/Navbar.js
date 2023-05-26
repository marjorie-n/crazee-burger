import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide.js";
import NavbarLeftSide from "./NavbarLeftSide.js";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
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
  

`;
