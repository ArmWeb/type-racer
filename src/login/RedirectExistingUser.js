import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { ssGetUser } from "../helpers/sessionStorage";
import { checkLogin } from "../helpers/checkLogin";

const RedirectExistingUser = props => {
  if (props.manualRedirect) {
    return <Redirect to="/" />;
  }

  let userData = ssGetUser();

  if (userData) {
    const { name, binId } = userData;
    if (checkLogin(name, binId)) {
      return <Redirect to="/" />;
    }
  }
  return null;
};

RedirectExistingUser.propTypes = {
  manualRedirect: PropTypes.bool
};

RedirectExistingUser.defaultProps = {
  manualRedirect: false
};

export default RedirectExistingUser;
