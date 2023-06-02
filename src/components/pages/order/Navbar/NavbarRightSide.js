import styled from "styled-components";
import Profile from "./profile.js";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled className="right-side">
      {/* <div className="admin-button">Admin button</div> */}
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}
const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  /* .admin-button {
    background: lightblue;
  }*/
  .profile {
    background: yellow;
  }
`;
