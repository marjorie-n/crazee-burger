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
  background-color: red;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
