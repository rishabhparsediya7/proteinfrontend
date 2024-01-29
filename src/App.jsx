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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
