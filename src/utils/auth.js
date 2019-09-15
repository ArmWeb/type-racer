import React from "react";
import { Redirect } from "react-router-dom";
import { checkLogin } from "../helpers/checkLogin";
import { ssGetUser } from "../helpers/sessionStorage";

export default ExtendComponent => {
  const Auth = props => {
    let userData = ssGetUser();
    let redirect = false;

    if (userData) {
      const { name, binId } = userData;
      if (!checkLogin(name, binId)) {
        redirect = true;
      }
    } else {
      redirect = true;
    }

    if (redirect) {
      return <Redirect to="/type-racer/login" />;
    }

    return <ExtendComponent {...props} />;
  };

  return Auth;
};
