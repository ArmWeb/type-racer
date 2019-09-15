import { wordIterator } from "../helpers/generators";

//generate text parts for easy handling each word, and avoiding whole text recompute/rerender
export const createTextParts = (text = "") => {
  let wordsIterator = {},
    currentWord = {},
    nextText = "";
  if (text.length) {
    const separator = " ";
    wordsIterator = wordIterator(text.split(separator), separator);
    currentWord = wordsIterator.next();
    nextText = text.replace(currentWord.value, "");
  }

  return { wordsIterator, currentWord, nextText, prevText: "" };
};

//check if input is wrong or not
export const proceedChar = (v = "", colors = [], currentWord = "") => {
  let wrongChar = false;
  for (let i in v) {
    colors[i] = "success";
    if (v[i] !== currentWord[i]) {
      colors[i] = "danger";
      wrongChar = true;
      break;
    }
  }
  return { wrongChar, colors };
};

//recompute values for previous, next and current parts of the string
export const setTextForNextWord = (data = {}) => {
  let parts = { ...data };
  parts.prevText = `${parts.prevText}${parts.currentWord.value}`;
  parts.currentWord = parts.wordsIterator.next();
  parts.nextText = parts.nextText.replace(`${parts.currentWord.value}`, "");
  return parts;
};
