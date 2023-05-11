import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-UI/Logo";

export default function Login() {
  //affichage
  return (
    <LoginStyled>
    <Logo/>
      <LoginForm />
    </LoginStyled>
  );
}
const LoginStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ::before {
    content: "";
    background: url("/images/burger-background.jpg");
    background-color: rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

