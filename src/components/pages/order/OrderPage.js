import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function OrderPage() {
  const { username } = useParams();
  console.log(username);

  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          NAVBAR
          <h1>Bonjour {username}</h1>
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <div className="main ">MAIN</div>
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
    .navbar {
      background: blue;
    }
    .main {
      background: green;
      flex: 1; /* or you can use height: calc(95vh - 10px); */
    }
  }
`;
