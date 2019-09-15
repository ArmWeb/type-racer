import Users from "../constants/users";

export const checkLogin = (name = "", binId = "") => {
  for (let v of Users) {
    if (v.name === name && v.binId === binId) {
      return true;
    }
  }
  return false;
};

export const validateLogin = (name = "", pass = "") => {
  for (let v of Users) {
    if (v.name === name && v.pass === pass) {
      return v;
    }
  }
  return false;
};
