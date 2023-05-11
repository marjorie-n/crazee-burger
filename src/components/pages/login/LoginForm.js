import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";


// import icons from "react-icons";
export default function LoginForm() {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setvalue("");
    navigate(`order/${value}`);
  };

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  return (
    <LoginFormStyed action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <h2>Connectez-vous</h2>
      </div>

      <input
        type="text"
        placeholder="Entrez votre prénom"
        required
        username={value}
        onChange={handleChange}
      />
      <button type="submit">Accéder à mon espace</button>
    </LoginFormStyed>
  );
}
const LoginFormStyed = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
`;

