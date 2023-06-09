import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { isLoggedIn, handleLogin } = useContext(AuthContext);
  return (
    <>
      <button onClick={handleLogin}>{!isLoggedIn ? "Login" : "Logout"}</button>
    </>
  );
};
