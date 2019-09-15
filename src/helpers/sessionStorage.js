export const ssSetUser = (data = {}) => {
  const userDataStr = JSON.stringify({
    name: data.name,
    binId: data.binId
  });
  sessionStorage.setItem("user", userDataStr);
  return true;
};

export const ssGetUser = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user === null) {
    return false;
  }
  return user;
};

export const ssLogout = () => {
  sessionStorage.removeItem("user");
};
