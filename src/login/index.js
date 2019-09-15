import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RedirectExistingUser from "./RedirectExistingUser";
import { validateLogin } from "../helpers/checkLogin";
import { ssSetUser } from "../helpers/sessionStorage";

const Login = () => {
  const [error, handleError] = useState("");
  const [redirect, handleRedirect] = useState(false);

  const proceedLogin = data => {
    if (!data) {
      handleError("Please fill the fields");
      return false;
    }

    const loginData = validateLogin(data.username, data.pass);

    if (loginData) {
      handleError("");
      ssSetUser(loginData);
      handleRedirect(true);
    } else {
      handleError("No such user");
    }
  };

  return (
    <>
      <RedirectExistingUser manualRedirect={redirect} />
      <LoginForm handleSubmit={proceedLogin} />
      {error.length ? <p>{error}</p> : null}
    </>
  );
};

export default Login;
