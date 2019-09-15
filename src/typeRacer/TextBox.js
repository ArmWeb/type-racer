import React, { memo } from "react";
import PropTypes from "prop-types";

const TextBox = memo(props => {
  const { text, colors } = props;

  const preventCopy = e => {
    e.preventDefault();
  };

  return (
    <p data-testid="textToType" onContextMenu={preventCopy}>
      <span className="text-success">{text.prevText}</span>
      <span>
        {text.currentWord &&
          !text.currentWord.done &&
          text.currentWord.value.split("").map((v, i) => (
            <span key={i} className={colors[i] ? `text-${colors[i]}` : null}>
              {v}
            </span>
          ))}
      </span>
      <span>{text.nextText}</span>
    </p>
  );
});

const { bool, shape, arrayOf, string } = PropTypes;

TextBox.propTypes = {
  colors: arrayOf(string).isRequired,
  text: shape({
    currentWord: shape({
      next: string,
      done: bool
    }),
    prevText: string,
    nextText: string
  }).isRequired
};

TextBox.defaultProps = {
  colors: [],
  text: {
    currentWord: { next: "", done: false },
    prevText: "",
    nextText: ""
  }
};

export default TextBox;
