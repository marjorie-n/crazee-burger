import styled from "styled-components";
import Navbar from "./Navbar/Navbar.js";
import { theme } from "../../../theme/index.js";
import Main from "./Main/Main.js";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext.js";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  // const { username } = useParams();
  // console.log(username);

  const orderContextValue = {
    isModeAdmin: isModeAdmin,
    setIsModeAdmin: setIsModeAdmin,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
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
