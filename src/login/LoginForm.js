import React from "react";
import PropTypes from "prop-types";
import UncontrolledInput from "../common/UncontrolledInput";
import { formDataHandler } from "../helpers/formDataHandler";

const LoginForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const { username, pass } = formDataHandler(e.target);

    if (username.length && pass.length) {
      props.handleSubmit({ username, pass });
    } else {
      props.handleSubmit(false);
    }
  };

  return (
    <div className="loginForm">
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <UncontrolledInput
          type="text"
          name="username"
          placeholder="Username"
          classes="input"
        />
        <UncontrolledInput
          type="password"
          name="pass"
          placeholder="Password"
          classes="input"
        />
        <button className="btn btn-default">Login</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;
