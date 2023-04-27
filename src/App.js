import "./App.css";
import Login from "./components/pages/login/Login";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
