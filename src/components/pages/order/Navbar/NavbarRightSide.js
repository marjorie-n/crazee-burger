import styled from "styled-components";
import Profile from "./profile.js";
import ToggleButton from "../../../reusable-UI/ToggleButton.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../../../theme/index.js";
import { useState } from "react";
import { FaUserSecret } from "react-icons/fa";

export default function NavbarRightSide({ username }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
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
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        colorBackground={"#2d3436"}
        colorText={"#ffeaa7"}
        onToggle={notify}
      />
      <Profile username={username} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarRightSideStyled>
  );
}
const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
