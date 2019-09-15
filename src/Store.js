import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import rootReducers from "./rootReducers";

const store = createStore(rootReducers, applyMiddleware(Thunk));

export default store;
