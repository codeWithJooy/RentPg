import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import floorReducer from "../reducers/floorReducer";

const loggerMiddleware = createLogger();
const store = createStore(
  floorReducer,
  applyMiddleware(thunk, loggerMiddleware)
);

export default store;
