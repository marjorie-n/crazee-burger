import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

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

      <div>
        <div className="input-with-icon">
          <BsPersonCircle className="icon" />
          <input
            type="text"
            placeholder="Entrez votre prénom"
            required
            username={value}
            onChange={handleChange}
          />
        </div>

        <button className="button-with-icon">
          <span>Accéder à mon espace</span>
          <IoChevronForward className="icon" />
        </button>
      </div>
    </LoginFormStyed>
  );
}
const LoginFormStyed = styled.form`
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
    border: 1.5px solid orange;
    margin-bottom: 40px;
  }

  .input-with-icon {
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: gray;
    }
    input {
      border: none;
      font-size: 15px;
      color: black;
    }

    &::placeholder {
      color: lightgray;
      background-color: white;
    }
  }
  .button-with-icon {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    background-color: orange;
    color: white;
    font-size: 15px;
    font-weight: 800;
    border: 1px solid orange;
    cursor: pointer;

    &:hover:not(:disabled) {
      background-color: white;
      color: orange;
      border: 1px solid orange;
      .icon {
        color: orange;
      }
    }

    &:active {
      background-color: orange;
      color: white;
      border: 1px solid orange;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .icon {
      font-size: 15px;
      margin-left: 8px;
      color: white;
      align-items: center;
      justify-content: center;
    }
  }
`;
