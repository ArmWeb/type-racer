import React, { useState, useRef, memo } from "react";
import PropTypes from "prop-types";
import { createTextParts, proceedChar, setTextForNextWord } from "./textHelper";
import TypeBox from "./TypeBox";
import TextBox from "./TextBox";

let charColors = [];
let wrongChar = false;

const Game = memo(props => {
  const [inputValue, setInputValue] = useState("");
  const [textParts, setParts] = useState({});

  const prevInputValue = useRef("");

  if (!inputValue.length) {
    wrongChar = false;
    charColors = [];
  }
  if (!props.start || !props.text.length) {
    return null;
  }

  //create previous, next, current parts of the word and an iterator for words
  if (!textParts.nextText && !textParts.prevText) {
    setParts(createTextParts(props.text));
  }

  //check if word is correct and set next word as current, update previous and next texts
  const proceedWord = v => {
    wrongChar = false;
    let parts = { ...textParts };
    parts = setTextForNextWord(parts);
    setInputValue("");
    prevInputValue.current = "";
    setParts(parts);
    props.sendData({ ...parts });
  };

  const proceedInput = e => {
    let v = e.target.value;

    //restrict user to enter one char at a time. Preventing copy/paste
    if (v.length - prevInputValue.current.length > 2) {
      v = v.substring(0, 1);
    }
    setInputValue(v);
    prevInputValue.current = v;

    charColors = [textParts.currentWord.length].fill("default");

    if (v === textParts.currentWord.value) {
      // input is a complete word
      proceedWord(v);
    } else {
      // input is a part of word
      const charData = proceedChar(v, charColors, textParts.currentWord.value);
      charColors = [...charData.colors];
      wrongChar = charData.wrongChar;
    }
  };

  return (
    <>
      <TextBox colors={charColors} text={textParts} />
      <TypeBox handle={proceedInput} isWrong={wrongChar} input={inputValue} />
    </>
  );
});

Game.propTypes = {
  sendData: PropTypes.func,
  start: PropTypes.bool,
  text: PropTypes.string
};

export default Game;
