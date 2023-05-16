import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-UI/TextInput";
import PrimaryButton from "../../reusable-UI/PrimaryButton";

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
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: 48px;
    color: white;
  }
  h2 {
    font-size: 2.5rem;
    color: white;
    margin: 20px 10px 10px;
    font-size: 36px;
  }

  hr {
    border: 1.5px solid red;
    margin-bottom: 40px;
  }

  .icon {
    font-size: 15px;
    margin-left: 8px;
    color: white;
    align-items: center;
    justify-content: center;
  }
`;
