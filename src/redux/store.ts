import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducers/productsReducer";

export default createStore(productsReducer, applyMiddleware(thunk));
