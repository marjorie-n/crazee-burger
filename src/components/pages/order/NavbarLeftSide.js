import styled from "styled-components";
export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
      <div className="left-side">Left</div>
    </NavbarLeftSideStyled>
  );
}
const NavbarLeftSideStyled = styled.nav`
  background: purple;
`;
