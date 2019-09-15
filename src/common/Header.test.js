import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";
import { ssGetUser, ssSetUser, ssLogout } from "../helpers/sessionStorage";
import Users from "../constants/users";

afterEach(cleanup);

describe("<Header />", () => {
  it("should render logo", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("logo")).toBeTruthy();
  });

  it("should render logout if logged in", () => {
    if (!ssGetUser().binId) {
      ssSetUser({
        name: Users[0].name,
        binId: Users[0].binId
      });
    }
    const { getByTestId } = render(<Header />);
    ssLogout();
    expect(getByTestId("logout")).toBeTruthy();
  });

  it("should not render logout if not logged in", () => {
    if (ssGetUser().binId) {
      ssLogout();
    }
    const { queryByTestId } = render(<Header />);
    expect(queryByTestId("logout")).toBeNull();
  });
});
