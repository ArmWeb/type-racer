import React from "react";
import PropTypes from "prop-types";

const UncontrolledInput = props => {
  const { type, name, label, placeholder, classes } = props;
  return (
    <label>
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={name}
        className={classes}
      />
    </label>
  );
};

const { string } = PropTypes;

UncontrolledInput.propTypes = {
  type: string.isRequired,
  name: string.isRequired,
  label: string,
  placeholder: string,
  classes: string
};

UncontrolledInput.defaultProps = {
  label: "",
  placeholder: "",
  classes: ""
};

export default UncontrolledInput;
