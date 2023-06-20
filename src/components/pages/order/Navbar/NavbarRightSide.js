import styled from "styled-components";
import Profile from "./Profile.js";
import ToggleButton from "../../../reusable-UI/ToggleButton.js";
import { FaUserSecret } from "react-icons/fa";
import ToastAdmin from "./ToastAdmin.js";
import { toast } from "react-toastify";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
export default function NavbarRightSide({ username }) {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);
  const notify = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton
        isChecked={isModeAdmin}
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        colorBackground={"#2d3436"}
        colorText={"#ffeaa7"}
        onToggle={notify}
      />
      <Profile username={username}/>
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}
const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  }
`;
