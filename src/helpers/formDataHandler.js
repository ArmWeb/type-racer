export const formDataHandler = (target = {}) => {
  const formData = new FormData(target);
  const values = {};
  for (let v of formData) {
    values[v[0]] = v[1];
  }
  return values;
};
