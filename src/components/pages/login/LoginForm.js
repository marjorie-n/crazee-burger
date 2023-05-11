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
        <hr />
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
  text-align: center;
  max-width: 500px;
  max-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5rem;
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
    border: 1.5px solid orange;
    margin-bottom: 40px;
  }
`;
