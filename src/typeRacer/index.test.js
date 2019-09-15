import React from "react";
import { Provider } from "react-redux";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import configureStore from "redux-mock-store";
import Thunk from "redux-thunk";
import axiosMock from "axios";
import TypeRacer from "../typeRacer";

const initialState = {
  notifyHistoryUpdated: () => {},
  globalLoading: () => {}
};
const mockStore = configureStore([Thunk]);
let wrapper;
let store;

beforeEach(() => {
  store = mockStore(initialState);
  wrapper = (
    <Provider store={store}>
      <TypeRacer />
    </Provider>
  );
});

afterEach(() => {
  cleanup();
});

describe("<TypeRacer />", () => {
  it("should render game when clicked 'play' button", async () => {
    const regex = /(<([^>]+)>)/gi;
    const randomText = "random text to type";

    axiosMock.get.mockResolvedValueOnce({ data: randomText });

    const { getByTestId } = render(wrapper);
    const startGame = getByTestId("startGame");

    expect(startGame).toBeTruthy();

    fireEvent.click(startGame);
    let resolvedText = await waitForElement(() => getByTestId("textToType"));
    resolvedText = resolvedText.innerHTML.replace(regex, "");

    expect(resolvedText).toBe(randomText);
  });
});
