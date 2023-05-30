import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar.js";
import Main from "./Main.js";

export default function OrderPage() {
  const { username } = useParams();
  console.log(username);

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main/>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};

    
  }
`;
