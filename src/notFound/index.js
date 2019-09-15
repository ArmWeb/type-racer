import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>It seems that we don't have such a page.</p>
      <p>
        Please <Link to="/">visit the home page</Link>
      </p>
    </>
  );
};

export default NotFound;
