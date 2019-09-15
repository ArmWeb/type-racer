//receives user's history, adds newly finished game result to it and returns
export const generateHistoryData = (
  userObj = {},
  parts = {},
  wpm = 0,
  progress = 0
) => {
  const userHistory = { ...userObj };

  //if the user fon't have a history yet, create
  if (!userHistory.history) {
    userHistory.history = [];
  }

  let nextTextFull = parts.nextText;

  //add currend word to the unfinished part of the string
  if (parts.currentWord && !parts.currentWord.done) {
    nextTextFull = `${parts.currentWord.value}${parts.nextText}`;
  }

  if (!parts.nextText) {
    nextTextFull = "";
  }

  let prevTextFull = parts.prevText;

  if (!parts.prevText) {
    prevTextFull = "";
  }

  userHistory.history.unshift({
    wpm: wpm,
    progress: progress,
    nextTxt: nextTextFull,
    prevTxt: prevTextFull
  });
  return userHistory;
};
