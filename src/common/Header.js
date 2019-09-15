import React from "react";
import { ssLogout, ssGetUser } from "../helpers/sessionStorage";

const Header = props => {
  const logout = () => {
    ssLogout();

    props.history.push("/login");
  };
  return (
    <header className="mainHeader">
      <h1 data-testid="logo">TypeRacer</h1>
      {ssGetUser().binId && (
        <button
          className="btn btn-default"
          data-testid="logout"
          onClick={logout}
        >
          Log out
        </button>
      )}
    </header>
  );
};

export default Header;
