import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-UI/TextInput";
import PrimaryButton from "../../reusable-UI/PrimaryButton";
import { theme } from "../../../theme";

// import icons from "react-icons";
export default function LoginForm() {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    setvalue("");
    navigate(`order/${value}`);
  };

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <TextInput
        username={value}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        Icon={<BsPersonCircle className="icon" />}
        required
      />
      <PrimaryButton
        label="Accéder à mon espace"
        Icon={<IoChevronForward className="icon" />}
      />
    </LoginFormStyled>
  );
}
const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  max-width: 400px;
  margin: 0 auto;
  padding: 2.5rem ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: ${theme.fonts.size.P5};
    color: ${theme.colors.white};
  }
  h2 {
    font-size:${theme.fonts.size.P2 *2}px ;
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P4};
  }

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-left: ${theme.gridUnit}px;
    color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
  }
`;
