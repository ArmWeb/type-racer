export const calculateWPM = (len = 0, time = 1) => {
  const averageWordLength = len / 5;
  const mins = time / 60;
  return Math.round(averageWordLength / mins);
};

export const calculateProgress = (passedTextLength = 0, totalLength = 1) => {
  return Math.round((passedTextLength * 100) / totalLength);
};
