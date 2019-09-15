export function* wordIterator(arr = [], tail = "") {
  for (let i = 0; i < arr.length; ++i) {
    let yieldStr = `${arr[i]}${tail}`;

    if (i === arr.length - 1) {
      yieldStr = `${arr[i]}`;
    }

    yield yieldStr;
  }
}
