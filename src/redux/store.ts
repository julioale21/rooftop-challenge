import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import shopReducer from "./reducers/shopReducer";

export default createStore(shopReducer, applyMiddleware(thunk));
