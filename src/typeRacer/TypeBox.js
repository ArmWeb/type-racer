import React, { memo } from "react";
import PropTypes from "prop-types";

const TypeBox = memo(props => {
  const { isWrong, handle, input } = props;
  const classes = "input " + (isWrong ? "input-danger" : "input-default");
  return (
    <input type="text" onChange={handle} value={input} className={classes} />
  );
});

TypeBox.propTypes = {
  handle: PropTypes.func,
  input: PropTypes.string,
  isWrong: PropTypes.bool
};

export default TypeBox;
