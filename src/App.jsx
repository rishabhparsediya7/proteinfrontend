import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/User/Home";
import ProductPage from "./Components/User/ProductPage";
import SignUp from "./Components/User/SignUp";
import Cart from "./Components/User/Cart";
import { UserContext } from "./context/UserContext.js";
import { useState } from "react";
import Signin from "./Components/User/Signin.jsx";
import UpdatePassword from "./Components/User/UpdatePassword.jsx";
import Success from "./Components/User/Success.jsx";
import Cancel from "./Components/User/Cancel.jsx";
import Order from "./Components/User/Order.jsx";
import Account from "./Components/User/Account.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [verified, setVerified] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        verified,
        setVerified,
        accessToken,
        setAccessToken,
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-order" element={<Order />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Cancel />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
