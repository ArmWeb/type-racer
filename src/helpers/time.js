export const formatMinSec = (seconds = 0) => {
  let tail = "";
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  if (sec.toString().length === 1) {
    tail = "0";
  }
  return `${min}:${tail}${sec}`;
};
